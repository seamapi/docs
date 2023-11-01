# Doc Snippet Bot

This is a library/script that generates properties from openapi spec inside documentation
whenever you insert a comment like this:

```md
<!-- CODE INJECT PROPERTIES 'path/to/endpoint'
Properties table fetched for the specified endpoint
-->
<!-- CODE INJECT END -->
```

## Setup

- `npm install`

## Running the Tests

You can test individual files
using e.g. `npx ava ./tests/find-files-to-inject-properties-into.test.ts` or all of them at once using `npm run test`.
