# Seam Docs

[![GitHub Actions](https://github.com/seamapi/makenew-tsmodule/actions/workflows/check.yml/badge.svg)](https://github.com/seamapi/makenew-tsmodule/actions/workflows/check.yml)

Welcome to the [Seam Docs].

## Description

This repository hosts both the documentation source along with supporting tools.

### GitBook documentation source

The entire documentation site is hosted by [GitBook] under `/docs`.

- Changes made though GitBook are synced back here to `/docs`.
- Changes made here on GitHub to files under `/docs` are synced back to GitBook.

[Seam Docs]: https://docs.seam.co/
[GitBook]: https://www.gitbook.com/

### Documentation generation

Some documentation content, such as the API reference pages, 
are automatically generated and updated in `/docs`.

The root of this project is a TypeScript project 
and documentation generation is implemented in `/src`.
When a new pull request is opened, code generation will run automatically
in a GitHub workflow and update the PR will any changes.
New PRs are automatically opened by [Dependabot] to ensure regular daily updates.

See the [Development](#development) section below 
for how to contribute to the documentation generation tool.

[Dependabot]: https://docs.github.com/en/code-security/dependabot

## Development 

### Quickstart

```
$ git clone https://github.com/seamapi/makenew-tsmodule.git
$ cd makenew-tsmodule
$ nvm install
$ npm install
$ npm run build
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
$ git clone git@github.com:seamapi/makenew-tsmodule.git
```

[source code]: https://github.com/seamapi/makenew-tsmodule

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
