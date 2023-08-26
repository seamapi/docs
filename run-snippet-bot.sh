#!/usr/bin/env bash

cd code-snippet-bot

if [ ! -d "node_modules" ]; then
  npm install
fi

npx esr ./src/cli.ts -p ../docs/products/smart-locks/access-codes "$@"
