import * as fs from 'fs';
import * as path from 'path';
import fetchPropertiesFromOpenapispec from './fetch-properties-from-openapispec';

async function injectPropertiesBot() {
  try {
    const fetchedProperties = await fetchPropertiesFromOpenapispec();

    const rootDirectory = process.cwd();
    const mdFiles = await findInjectFiles(rootDirectory);
    for (const filePath of mdFiles) {
      injectProperties(filePath, fetchedProperties);
      console.log(`Found the following *.md files: ${filePath}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function findInjectFiles(directoryPath: string): Promise<string[]> {
  let markdownFiles: string[] = [];

  const files = fs.readdirSync(directoryPath, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(directoryPath, file.name);
    if (file.isDirectory()) {
      markdownFiles = markdownFiles.concat(await findInjectFiles(filePath))
    } else if (file.name.endsWith(".md")) {
      const content = fs.readFileSync(filePath, "utf-8")
      if (content.includes('<!-- INJECT PROPERTIES')) {
        markdownFiles.push(filePath);
      }
    }
  }
  return markdownFiles;
}

function injectProperties(filePath: string, propertiesToInject: string) {
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  fileContent = fileContent.replace('<!-- INJECT PROPERTIES', propertiesToInject);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
}

injectPropertiesBot();


