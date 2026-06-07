#!/usr/bin/env node
/**
 * GitBook → Mintlify migration script for Seam docs.
 * Converts all .md files from docs/ into mintlify-docs/ with Mintlify MDX syntax.
 * Generates docs.json from SUMMARY.md.
 */

import fs from "fs";
import path from "path";

const SRC = path.resolve("docs");
const DEST = path.resolve("mintlify-docs");

// ─── Helpers ────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    ensureDir(dest);
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
  }
}

// ─── GitBook → Mintlify content conversion ──────────────────────────────────

function convertContent(content, filePath) {
  let out = content;

  // 1. Convert {% tabs %} / {% tab title="X" %} / {% endtab %} / {% endtabs %}
  out = out.replace(/\{%\s*tabs\s*%\}/g, "<Tabs>");
  out = out.replace(/\{%\s*endtabs\s*%\}/g, "</Tabs>");
  out = out.replace(/\{%\s*tab\s+title="([^"]+)"\s*%\}/g, '<Tab title="$1">');
  out = out.replace(/\{%\s*endtab\s*%\}/g, "</Tab>");

  // 2. Convert {% hint style="X" %} / {% endhint %}
  const hintMap = {
    info: "Info",
    warning: "Warning",
    danger: "Danger",
    success: "Check",
    tip: "Tip",
  };
  out = out.replace(
    /\{%\s*hint\s+style="([^"]+)"\s*%\}/g,
    (_, style) => `<${hintMap[style] || "Note"}>`
  );
  out = out.replace(
    /\{%\s*endhint\s*%\}/g,
    (match) => {
      // Find the most recent unclosed hint tag
      // We'll do a second pass to close properly
      return "%%ENDHINT%%";
    }
  );
  // Now pair up the endhint markers with their opening tags
  out = closeHintTags(out);

  // 3. Convert {% embed url="..." %} ... {% endembed %}
  out = out.replace(
    /\{%\s*embed\s+url="([^"]+)"\s*%\}[\s\S]*?\{%\s*endembed\s*%\}/g,
    (_, url) => {
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        const videoId = extractYouTubeId(url);
        if (videoId) {
          return `<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/${videoId}"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>`;
        }
      }
      return `<iframe src="${url}" width="100%" height="400" />`;
    }
  );

  // 4. Convert {% code overflow="wrap" %} ... {% endcode %}
  // Just strip the wrapper, keep the code block inside
  out = out.replace(/\{%\s*code\s+[^%]*%\}\n?/g, "");
  out = out.replace(/\{%\s*endcode\s*%\}\n?/g, "");

  // 5. Convert {% file src="..." %} to a download link
  out = out.replace(
    /\{%\s*file\s+src="([^"]+)"\s*%\}/g,
    (_, src) => {
      const filename = path.basename(src);
      return `[📄 ${filename}](${src})`;
    }
  );

  // 6. Convert {% openapi ... %} blocks
  out = out.replace(
    /\\?\{%\s*openapi\s+[^%]*%\\?\}[\s\S]*?\\?\{%\s*endopenapi\s*%\\?\}/g,
    (match) => {
      // Extract path and method if available
      const pathMatch = match.match(/path="([^"]+)"/);
      const methodMatch = match.match(/method="([^"]+)"/);
      if (pathMatch && methodMatch) {
        return `> **\`${methodMatch[1].toUpperCase()}\`** \`${pathMatch[1]}\`\n>\n> See the [API Reference](/api-reference${pathMatch[1]}) for details.`;
      }
      return "";
    }
  );

  // 7. Convert {% swagger ... %} blocks (same as openapi)
  out = out.replace(
    /\{%\s*swagger\s+[^%]*%\}[\s\S]*?\{%\s*endswagger\s*%\}/g,
    ""
  );

  // 8. Convert {% columns %} / {% column %} blocks
  out = out.replace(/\{%\s*columns\s*%\}/g, '<Columns cols={2}>');
  out = out.replace(/\{%\s*endcolumns\s*%\}/g, "</Columns>");
  out = out.replace(/\{%\s*column\s*%\}/g, "<div>");
  out = out.replace(/\{%\s*endcolumn\s*%\}/g, "</div>");

  // 9. Convert GitBook card tables to Mintlify CardGroup
  out = convertCardTables(out);

  // 10. Fix image paths: .gitbook/assets/ → /images/
  out = out.replace(
    /(?:\.\.\/)*.gitbook\/assets\//g,
    "/images/"
  );

  // 11. Strip GitBook frontmatter description-only and convert to Mintlify format
  out = convertFrontmatter(out, filePath);

  // 12. Remove escaped GitBook tags (e.g. \{% ... %\})
  out = out.replace(/\\{%/g, "{%");
  out = out.replace(/%\\}/g, "%}");

  // 13. Self-close void HTML elements for MDX compatibility
  // <br> → <br />
  out = out.replace(/<br\s*>/g, "<br />");
  // <img ...> → <img ... /> (only if not already self-closed)
  out = out.replace(/<img\s([^>]*[^/])>/g, "<img $1 />");
  // <hr> → <hr />
  out = out.replace(/<hr\s*>/g, "<hr />");

  // 14. Convert HTML comments <!-- --> to MDX comments {/* */}
  out = out.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");

  return out;
}

function closeHintTags(content) {
  // Replace %%ENDHINT%% markers with the correct closing tag
  // by scanning backwards for the matching opening tag
  const lines = content.split("\n");
  const openStack = [];
  const result = [];

  for (const line of lines) {
    // Check for opening hint tags
    const openMatch = line.match(/<(Info|Warning|Danger|Check|Tip|Note)>/);
    if (openMatch) {
      openStack.push(openMatch[1]);
    }

    if (line.includes("%%ENDHINT%%")) {
      const tag = openStack.pop() || "Note";
      result.push(line.replace("%%ENDHINT%%", `</${tag}>`));
    } else {
      result.push(line);
    }
  }
  return result.join("\n");
}

function extractYouTubeId(url) {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /[?&]v=([^?&]+)/,
    /embed\/([^?&]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function convertCardTables(content) {
  return content.replace(
    /<table[^>]*data-view="cards"[^>]*>[\s\S]*?<\/table>/g,
    (match) => {
      // Parse the thead to identify column semantics
      const theadMatch = match.match(/<thead>([\s\S]*?)<\/thead>/);
      let colTypes = []; // 'title', 'desc', 'cover', 'target', 'hidden'
      if (theadMatch) {
        const thRegex = /<th([^>]*)>/g;
        let thMatch;
        while ((thMatch = thRegex.exec(theadMatch[1])) !== null) {
          const attrs = thMatch[1];
          if (attrs.includes("data-card-target")) {
            colTypes.push("target");
          } else if (attrs.includes("data-card-cover")) {
            colTypes.push("cover");
          } else if (attrs.includes("data-hidden")) {
            colTypes.push("hidden");
          } else if (colTypes.length === 0) {
            colTypes.push("title");
          } else {
            colTypes.push("desc");
          }
        }
      }

      const cards = [];
      const rowRegex = /<tr>([\s\S]*?)<\/tr>/g;
      let rowMatch;
      // Skip thead rows
      const tbodyMatch = match.match(/<tbody>([\s\S]*?)<\/tbody>/);
      if (!tbodyMatch) return match;
      const tbody = tbodyMatch[1];

      while ((rowMatch = rowRegex.exec(tbody)) !== null) {
        const rowContent = rowMatch[1];
        const cells = [];
        const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
        let cellMatch;
        while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
          cells.push(cellMatch[1].trim());
        }

        let title = "";
        let description = "";
        let href = "";
        let img = "";

        for (let i = 0; i < cells.length && i < colTypes.length; i++) {
          const cell = cells[i];
          const type = colTypes[i];

          if (type === "title") {
            title = cell
              .replace(/<\/?strong>/g, "")
              .replace(/<[^>]+>/g, "")
              .trim();
          } else if (type === "desc") {
            description = cell.replace(/<[^>]+>/g, "").trim();
          } else if (type === "target") {
            const linkMatch = cell.match(/<a\s+href="([^"]+)"/);
            if (linkMatch) href = linkMatch[1];
          } else if (type === "cover") {
            const imgMatch = cell.match(/<a\s+href="([^"]+)"/);
            if (imgMatch) {
              img = imgMatch[1].replace(
                /(?:\.\.\/)*\.gitbook\/assets\//,
                "/images/"
              );
            }
          }
        }

        if (title) {
          let cardAttrs = `title="${title}"`;
          if (href && !href.includes("broken")) {
            let cleanHref = href
              .replace(/\.md$/, "")
              .replace(/\/README$/, "");
            if (!cleanHref.startsWith("http") && !cleanHref.startsWith("/")) {
              cleanHref = "/" + cleanHref;
            }
            cardAttrs += ` href="${cleanHref}"`;
          }
          if (img && !img.includes("broken")) {
            cardAttrs += ` img="${img}"`;
          }
          cards.push(
            `<Card ${cardAttrs}>\n  ${description}\n</Card>`
          );
        }
      }

      if (cards.length === 0) return match;
      return `<CardGroup cols={2}>\n${cards.join("\n")}\n</CardGroup>`;
    }
  );
}

function convertFrontmatter(content, filePath) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) {
    // No frontmatter — extract title from first heading
    const rest = content;
    const titleMatch = rest.match(/^#\s+(.+)/m);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      const body = rest.replace(/^#\s+.+\n*/m, "\n");
      return `---\ntitle: "${title.replace(/"/g, '\\"')}"\n---\n${body}`;
    }
    return content;
  }

  const fmBlock = fmMatch[1];
  const rest = content.slice(fmMatch[0].length);

  // Extract description (may be multi-line with >- block scalar)
  let description = "";
  const blockScalarMatch = fmBlock.match(
    /description:\s*>-?\s*\n((?:\s{2,}.+\n?)+)/
  );
  if (blockScalarMatch) {
    description = blockScalarMatch[1]
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .join(" ");
  } else {
    const simpleDescMatch = fmBlock.match(/description:\s*(.+)/);
    if (simpleDescMatch) {
      description = simpleDescMatch[1].trim().replace(/^['"]|['"]$/g, "");
    }
  }

  // Extract title from first # heading in rest
  let title = "";
  const titleMatch = rest.match(/^#\s+(.+)/m);
  if (titleMatch) {
    title = titleMatch[1].trim();
  }

  // Build new frontmatter
  let newFm = "---\n";
  if (title) newFm += `title: "${title.replace(/"/g, '\\"')}"\n`;
  if (description)
    newFm += `description: "${description.replace(/"/g, '\\"')}"\n`;
  newFm += "---\n";

  // Remove the H1 heading from the body since title is now in frontmatter
  let body = rest;
  if (title) {
    body = body.replace(/^#\s+.+\n*/m, "\n");
  }

  return newFm + body;
}

// ─── SUMMARY.md → docs.json navigation ─────────────────────────────────────

function parseSummary(summaryPath) {
  const content = fs.readFileSync(summaryPath, "utf-8");
  const lines = content.split("\n");

  const sections = []; // [{name, items: [{title, path, indent, children}]}]
  let currentSection = null;

  for (const line of lines) {
    // Section headers like ## Core Concepts
    const sectionMatch = line.match(/^## (.+?)(?:\s*<a[^>]*>.*<\/a>)?$/);
    if (sectionMatch) {
      currentSection = { name: sectionMatch[1].trim(), items: [] };
      sections.push(currentSection);
      continue;
    }

    // Page entries: * [Title](path.md)
    const pageMatch = line.match(/^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (pageMatch) {
      const indent = pageMatch[1].length;
      const title = pageMatch[2];
      let pagePath = pageMatch[3];

      if (pagePath.startsWith("http")) continue;
      if (pagePath.includes("broken-reference") || pagePath.includes("/broken/")) continue;

      pagePath = pagePath
        .replace(/\.md$/, "")
        .replace(/\/README$/, "");

      if (!currentSection) {
        currentSection = { name: "Getting Started", items: [] };
        sections.unshift(currentSection);
      }

      currentSection.items.push({ title, path: pagePath, indent });
    }
  }

  // Build nested groups from items based on indent levels
  function buildGroups(items) {
    const groups = [];
    let currentGroup = null;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.indent <= 2) {
        // Check if next items are children (indent > 2)
        const children = [];
        let j = i + 1;
        while (j < items.length && items[j].indent > 2) {
          children.push(items[j]);
          j++;
        }

        if (children.length > 0) {
          // This is a group parent
          const subPages = [item.path];
          for (const child of children) {
            subPages.push(child.path);
          }
          groups.push({
            group: item.title,
            pages: subPages,
          });
          i = j - 1; // skip children
        } else {
          // Standalone page — add to a catch-all group if needed
          if (!currentGroup || currentGroup.group !== "__standalone__") {
            currentGroup = { group: "__standalone__", pages: [] };
            groups.push(currentGroup);
          }
          currentGroup.pages.push(item.path);
        }
      }
    }

    // Merge standalone groups and rename
    return groups.map((g) => {
      if (g.group === "__standalone__") {
        return { ...g, group: "Overview" };
      }
      return g;
    });
  }

  return { sections, buildGroups };
}

function buildDocsJson(parsedSummary) {
  const { sections, buildGroups } = parsedSummary;

  const docsJson = {
    $schema: "https://mintlify.com/docs.json",
    name: "Seam",
    theme: "mint",
    logo: {
      light: "/images/seam-wordmark-light.png",
      dark: "/images/seam-wordmark-dark.png",
    },
    favicon: "/images/favicon.png",
    colors: {
      primary: "#2563EB",
      light: "#60A5FA",
      dark: "#1D4ED8",
    },
    navigation: {},
    topbar: {
      links: [
        {
          label: "Console",
          href: "https://console.seam.co",
        },
      ],
    },
    footer: {
      socials: {
        github: "https://github.com/seamapi",
        website: "https://seam.co",
      },
    },
    api: {
      baseUrl: "https://connect.getseam.com",
    },
  };

  if (sections.length <= 1) {
    // Simple: just groups
    const groups = sections.length > 0 ? buildGroups(sections[0].items) : [];
    docsJson.navigation.groups = groups;
  } else {
    // First section becomes the main sidebar groups, rest become tabs
    const firstSection = sections[0];
    docsJson.navigation.groups = buildGroups(firstSection.items);

    docsJson.navigation.tabs = [];
    for (let i = 1; i < sections.length; i++) {
      const section = sections[i];
      docsJson.navigation.tabs.push({
        tab: section.name,
        groups: buildGroups(section.items),
      });
    }
  }

  return docsJson;
}

// ─── Branding ───────────────────────────────────────────────────────────────

const BRANDING_DIR = path.resolve("branding");

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  console.log("🚀 Starting GitBook → Mintlify migration...\n");

  // 1. Clean and create destination
  if (fs.existsSync(DEST)) {
    fs.rmSync(DEST, { recursive: true });
  }
  ensureDir(DEST);

  // The docs repo has multiple GitBook spaces: api-reference/, brand-guides/, guides/
  // Each has its own .gitbook/assets/ and SUMMARY.md
  const spaces = fs.readdirSync(SRC).filter((entry) => {
    const fullPath = path.join(SRC, entry);
    return (
      fs.statSync(fullPath).isDirectory() &&
      fs.existsSync(path.join(fullPath, "SUMMARY.md"))
    );
  });

  console.log(`   Found ${spaces.length} GitBook spaces: ${spaces.join(", ")}`);

  // 2. Copy assets from all spaces into a shared images/ folder
  console.log("📁 Copying assets...");
  let totalAssets = 0;
  for (const space of spaces) {
    const assetsDir = path.join(SRC, space, ".gitbook", "assets");
    if (fs.existsSync(assetsDir)) {
      copyRecursive(assetsDir, path.join(DEST, "images"));
      const count = fs.readdirSync(assetsDir).length;
      totalAssets += count;
      console.log(`   ✓ ${space}: ${count} assets`);
    }
  }
  console.log(`   ✓ Total: ${totalAssets} assets copied to images/`);

  // Copy branding assets from branding/ into images/
  console.log("🎨 Copying branding assets...");
  if (fs.existsSync(BRANDING_DIR)) {
    copyRecursive(BRANDING_DIR, path.join(DEST, "images"));
    console.log(`   ✓ ${fs.readdirSync(BRANDING_DIR).join(", ")}`);
  }

  // 3. Convert all markdown files from all spaces
  console.log("📝 Converting markdown files...");
  let fileCount = 0;
  let errorCount = 0;

  function processDir(srcDir, destDir, spaceName) {
    if (!fs.existsSync(srcDir)) return;
    for (const entry of fs.readdirSync(srcDir)) {
      const srcPath = path.join(srcDir, entry);
      const stat = fs.statSync(srcPath);

      if (entry === ".gitbook") continue;

      if (stat.isDirectory()) {
        processDir(srcPath, path.join(destDir, entry), spaceName);
      } else if (entry.endsWith(".md")) {
        try {
          const content = fs.readFileSync(srcPath, "utf-8");
          const relativePath = path.relative(SRC, srcPath);

          const destFile = path.join(
            destDir,
            entry.replace(/\.md$/, ".mdx")
          );
          const converted = convertContent(content, relativePath);

          ensureDir(path.dirname(destFile));
          fs.writeFileSync(destFile, converted);
          fileCount++;
        } catch (err) {
          console.error(`   ✗ Error converting ${srcPath}: ${err.message}`);
          errorCount++;
        }
      }
    }
  }

  for (const space of spaces) {
    processDir(path.join(SRC, space), path.join(DEST, space), space);
  }
  console.log(`   ✓ ${fileCount} files converted, ${errorCount} errors`);

  // 4. Generate docs.json from all SUMMARY.md files
  console.log("📋 Generating docs.json...");
  const allSections = [];
  for (const space of spaces) {
    const summaryPath = path.join(SRC, space, "SUMMARY.md");
    if (fs.existsSync(summaryPath)) {
      const parsed = parseSummary(summaryPath);
      // Prefix all page paths with the space name
      for (const section of parsed.sections) {
        for (const item of section.items) {
          item.path = `${space}/${item.path}`;
        }
      }
      allSections.push(...parsed.sections);
    }
  }

  const docsJson = buildDocsJson({
    sections: allSections,
    buildGroups: function (items) {
      const groups = [];
      let currentGroup = null;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.indent <= 2) {
          const children = [];
          let j = i + 1;
          while (j < items.length && items[j].indent > 2) {
            children.push(items[j]);
            j++;
          }

          if (children.length > 0) {
            const subPages = [item.path];
            for (const child of children) {
              subPages.push(child.path);
            }
            groups.push({ group: item.title, pages: subPages });
            i = j - 1;
          } else {
            if (!currentGroup || currentGroup.group !== "__standalone__") {
              currentGroup = { group: "__standalone__", pages: [] };
              groups.push(currentGroup);
            }
            currentGroup.pages.push(item.path);
          }
        }
      }

      return groups.map((g) => {
        if (g.group === "__standalone__") return { ...g, group: "Overview" };
        return g;
      });
    },
  });
  fs.writeFileSync(
    path.join(DEST, "docs.json"),
    JSON.stringify(docsJson, null, 2)
  );
  console.log("   ✓ docs.json generated");

  // 5. Write package.json
  fs.writeFileSync(
    path.join(DEST, "package.json"),
    JSON.stringify(
      {
        name: "seam-docs",
        private: true,
        scripts: { dev: "mintlify dev", build: "mintlify build" },
        devDependencies: { mintlify: "^4" },
      },
      null,
      2
    ) + "\n"
  );

  // 6. Report summary
  console.log("\n✅ Migration complete!");
  console.log(`   Files converted: ${fileCount}`);
  console.log(`   Assets copied: ${totalAssets}`);
  console.log(`   Output: ${DEST}`);
}

main();
