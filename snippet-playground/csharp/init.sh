#!/usr/bin/env sh

set -e
set -u

mv Program.cs Program.cs.bak
dotnet new console
dotnet add package seam
mv Program.cs.bak Program.cs
