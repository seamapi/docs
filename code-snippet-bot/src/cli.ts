#!/usr/bin/env node
import yargs from "yargs"
import chalk from "chalk"
import { hideBin } from "yargs/helpers"
import { processFilesInDirectory } from "./process-files-in-directory"

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

  await processFilesInDirectory(dirPath)
}

runCli().catch((err) => {
  console.error(chalk.red(err.message))
  process.exit(1)
})
