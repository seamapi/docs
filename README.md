# Seam Docs

[![Edit on GitBook](https://img.shields.io/badge/Edit-on%20GitBook-blue)](https://app.gitbook.com/o/jhFodLh6YFJJYK6Lv9wE/s/xnN2A67918om1UthYWsF/)
[![GitHub Actions](https://github.com/seamapi/docs/actions/workflows/check.yml/badge.svg)](https://github.com/seamapi/docs/actions/workflows/check.yml)

Welcome to the [Seam Docs].

## Description

This repository hosts both the documentation source along with supporting tools.

### GitBook documentation source

The entire documentation site is hosted by [GitBook] under `/docs`.

- Changes made though GitBook are synced back here to `/docs`.
- Changes made here on GitHub to files under `/docs` are synced back to GitBook.

[Seam Docs]: https://docs.seam.co/
[GitBook]: https://www.gitbook.com/

### Seam SDK Playground

The Seam SDK Playground is a one-click development environment
for experimenting with the Seam SDK and Seam CLI.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/seamapi/docs?devcontainer_path=.devcontainer%2Fseam-sdk-playground%2Fdevcontainer.json)

Each folder in `/seam-sdk-playground` is a minimal
example for running the Seam SDK in a supported programming language.
By default, the SDK is configured to make requests to
a fake version of the Seam API, however you may
update the code sample to use your sandbox or production workspace.

There are a few ways to use the Seam SDK Playground:

- Click the button above to instantly launch the Seam SDK Playground in a [Codespace].
- Clone this repository and open the Seam SDK Playground locally
  using [Visual Studio Code Dev Containers].
- Setup your local machine with any programming languages you want to use,
  then clone this repository and navigate to the `/seam-sdk-playground` directory.

[Codespace]: https://github.com/features/codespaces
[Visual Studio Code Dev Containers]: https://code.visualstudio.com/docs/devcontainers/containers

### Documentation generation

Some documentation content, such as the API reference pages,
are automatically generated and updated in `/docs`.
See the [Development](#development) section below
for how to contribute to the documentation generation tool.

- The root of this project is a TypeScript project
  and documentation generation is implemented in `/codegen`.
- When a new pull request is opened, code generation will run automatically
  in a GitHub workflow and update the PR will any changes.
- New PRs are automatically opened by Dependabot to ensure regular daily updates.

## Development

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/seamapi/docs)

### Quickstart

```
$ git clone https://github.com/seamapi/docs.git
$ cd docs
$ nvm install
$ npm install
$ npm run generate
```

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run`.
View them with

```
$ npm run
```

### Source code

The [source code] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:seamapi/docs.git
```

[source code]: https://github.com/seamapi/docs

### Requirements

You will need [Node.js] with [npm] and a [Node.js debugging] client.

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

Set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[Node.js debugging]: https://nodejs.org/en/docs/guides/debugging-getting-started/
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/creationix/nvm

### Optional Requirements

These tools are using to format code during documentation generation.
They are not required for local development:
if they are not installed, the doc generation will simply skip the formatting step.
GitHub actions will automatically ensure the formatting is applied for all pull requests.

- [shfmt](https://github.com/mvdan/sh)
- [ruff](https://github.com/astral-sh/ruff)
- [gofmt](https://go.dev/blog/gofmt)
- [syntax_tree](https://github.com/ruby-syntax-tree/syntax_tree)

## GitHub Actions

_GitHub Actions should already be configured: this section is for reference only._

The following repository secrets must be set on [GitHub Actions]:

- `GH_TOKEN`: A personal access token for the bot user with `contents:write` permission.
- `GIT_USER_NAME`: The GitHub bot user's real name.
- `GIT_USER_EMAIL`: The GitHub bot user's email.
- `GPG_PRIVATE_KEY`: The GitHub bot user's [GPG private key].
- `GPG_PASSPHRASE`: The GitHub bot user's GPG passphrase.

[GitHub Actions]: https://github.com/features/actions
[GPG private key]: https://github.com/marketplace/actions/import-gpg#prerequisites

## Contributing

> If using squash merge, edit and ensure the commit message follows the [Angular Commit Message Conventions] specification.
> Otherwise, each individual commit must follow the [Angular Commit Message Conventions] specification.

1. Create your feature branch (`git checkout -b my-new-feature`).
2. Make changes.
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create a new draft pull request.
6. Ensure all checks pass.
7. Mark your pull request ready for review.
8. Wait for the required approval from the code owners.
9. Merge when ready.

[Angular Commit Message Conventions]: https://semantic-release.gitbook.io/semantic-release/#commit-message-format

## License

Copyright (c) 2021-2024 Seam Labs, Inc.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
