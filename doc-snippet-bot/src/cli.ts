#!/usr/bin/env node

import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import injectPropertiesBot from "./inject-properties-bot"

async function runDocSnippetBot() {
  const chalk = (await import("chalk")).default
  yargs(hideBin(process.argv))
    .scriptName("doc-snippet-bot")
    .command("doc-snippet-bot", "run doc-snippet-bot", {}, async () => {
      await injectPropertiesBot()
    })
    .help().argv
}

runDocSnippetBot().catch(async (err) => {
  const chalk = (await import("chalk")).default
  console.error(chalk.red(err.message))
  process.exit(1)
})
