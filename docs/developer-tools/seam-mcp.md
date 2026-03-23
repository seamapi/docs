---
description: >-
  Connect your AI coding assistant to Seam documentation in under a minute —
  no API keys or authentication required.
---

# Seam MCP Server

The Seam MCP server gives your AI coding assistant direct access to the entire Seam documentation. It can search docs semantically, fetch full pages, and browse the doc tree — so your assistant always has accurate, up-to-date context about the Seam API.

{% hint style="success" %}
**No API keys or authentication required.** The server is free and public — just add the URL and start coding.
{% endhint %}

## One-Click Install

[**Install in Cursor**](cursor://anysphere.cursor-deeplink/mcp/install?name=seam\&config=eyJ1cmwiOiJodHRwczovL21jcC5zZWFtLmNvL21jcCJ9)

For other editors, follow the manual setup below.

## Setup

{% tabs %}
{% tab title="Claude Code" %}
Run this command in your terminal:

```bash
claude mcp add --transport http seam https://mcp.seam.co/mcp
```
{% endtab %}

{% tab title="Cursor" %}
Add to `.cursor/mcp.json` in your project:

```json
{
  "mcpServers": {
    "seam": {
      "url": "https://mcp.seam.co/mcp"
    }
  }
}
```
{% endtab %}

{% tab title="Windsurf" %}
Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "seam": {
      "serverUrl": "https://mcp.seam.co/mcp"
    }
  }
}
```
{% endtab %}

{% tab title="VS Code" %}
Add to `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "seam": {
      "type": "http",
      "url": "https://mcp.seam.co/mcp"
    }
  }
}
```
{% endtab %}

{% tab title="Codex" %}
Run this command in your terminal:

```bash
codex mcp add seam --url https://mcp.seam.co/mcp
```

Or add to `~/.codex/config.toml`:

```toml
[mcp_servers.seam]
url = "https://mcp.seam.co/mcp"
```
{% endtab %}

{% tab title="ChatGPT" %}
1. Open ChatGPT Desktop
2. Go to **Settings** → **Apps** and enable **Developer Mode**
3. Click **Create** to add a new connector
4. Enter the URL: `https://mcp.seam.co/mcp`
{% endtab %}

{% tab title="Claude Desktop" %}
1. Open Claude Desktop
2. Go to **Settings** → **Connectors**
3. Click **Add Connector**
4. Enter: `https://mcp.seam.co/mcp`

Alternatively, add to your config file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "seam": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.seam.co/mcp"]
    }
  }
}
```
{% endtab %}
{% endtabs %}

## Available Tools

| Tool                 | Description                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| `search_docs`        | Semantic search across all Seam documentation. Returns ranked results with confidence scores.  |
| `get_doc`            | Fetch the full content of a specific documentation page by path.                               |
| `list_doc_sections`  | Browse the documentation tree structure to discover available pages.                           |

## Try It Out

After setup, try asking your AI assistant:

* "How do I create an API key in Seam?"
* "Show me how to unlock a door with the Seam API"
* "What access control systems does Seam support?"
