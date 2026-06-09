#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 22 >/dev/null 2>&1
cd "$(dirname "$0")/../mintlify-docs"
exec npx mintlify dev --port "${PORT:-3000}"
