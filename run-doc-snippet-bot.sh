#!/usr/bin/env bash

cd doc-snippet-bot 

if [ ! -d "node_modules" ]; then
  npm install 
fi

npx esr ./src/cli.ts 