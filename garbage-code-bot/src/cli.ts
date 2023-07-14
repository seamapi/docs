#!/usr/bin/env node
import yargs from "yargs"
import chalk from "chalk"
import fs from "fs"
import path from "path"
import { hideBin } from "yargs/helpers"
import { getCodeInjects, injectCode } from "./inject-code-syntax"
import { findInjectFiles } from "./find-inject-files"
import { languageConfigurations } from "./language-configurations"

async function runCli() {
  // Use yargs to parse command line arguments
  const argv: any = yargs(hideBin(process.argv))
    .scriptName("garbage-code-bot")
    .usage("$0 <cmd> [args]")
    .option("path", {
      alias: "p",
      description: "Path to the directory",
      type: "string",
    })
    .help()
    .epilogue(
      "This script processes any file in the given directory with a code inject marker and uses OpenAI to generate a code snippet and injects it into the file using Gitbook's markdown syntax."
    )
    .alias("help", "h").argv

  const dirPath = argv.path

  // Ensure a path was provided
  if (!dirPath) {
    console.error(chalk.red("Please provide a directory path"))
    process.exit(1)
  }

  // Get files with inject markers
  const injectFiles = await findInjectFiles(dirPath)

  for (const filePath of injectFiles) {
    console.log(chalk.yellow(`Processing ${filePath}`))

    const codeInjects = await getCodeInjects(filePath)

    for (let i = 0; i < codeInjects.length; i++) {
      console.log(
        chalk.blue(`Injecting code at location ${codeInjects[i].location}`)
      )

      for (const languageConfiguration of languageConfigurations) {
      }

      await injectCode(filePath, i)
    }

    console.log(chalk.green(`Done processing ${filePath}`))
  }
}

runCli().catch((err) => {
  console.error(chalk.red(err.message))
  process.exit(1)
})
