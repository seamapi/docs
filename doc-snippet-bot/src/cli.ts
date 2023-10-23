#!/usr/bin/env node

import yargs, { scriptName } from "yargs"
import { hideBin } from "yargs/helpers"
import chalk from "chalk"
import injectPropertiesBot from "./inject-properties-bot"

async function runDocSnippetBot() {
  yargs(hideBin(process.argv))
    .scriptName("doc-snippet-bot")
    .command(
      "doc-snippet-bot",
      "run doc-snippet-bot",
      {}, async () => {
        await injectPropertiesBot()
      })
    .help().argv;
}

runDocSnippetBot().catch((err) => {
  console.error(chalk.red(err.message))
  process.exit(1)
})

