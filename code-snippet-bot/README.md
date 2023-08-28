# Code Snippet Bot

This is a library/script that generates code snippets inside documentation
whenever you insert a comment like this:

```md
<!-- CODE INJECT START
List all devices in the workspace
-->
<!-- CODE INJECT END -->
```

## Setup

- `npm install`
- You must set `OPENAI_API_KEY` to run the code snippet bot.

## Running the Code Snippet Server

Run `npm run start:server` to get a server like the one shown below for testing
snippets.

If you're doing development, prefer to use the test suite to test different
tricky scenarios, this will prevent people from breaking things in the future.

![](https://user-images.githubusercontent.com/1910070/263612175-16834acf-8123-4aa1-a930-855b05cbb90c.png)

## Running the Tests

The code snippet bot has a great test suite. You should test different files
using e.g. `npx ava ./tests/add-typescript-snippet.test.ts`. The AI output
can change so running `npm run test` will probably cause snapshots to fail (this
is ok for now)

## Code Snippet Bot relation to Fake

Code snippets are run against the fake, which means they need to use the seeded
values of the fake, you can [see the seed values here](https://github.com/seamapi/fake-seam-connect/blob/2fdadb575779e509e79d0954fecbae01cca21ad8/src/lib/database/seed.ts#L3) e.g. if
the bot is trying to use a device_id, it should use `august_device_1` as the
uuid.
