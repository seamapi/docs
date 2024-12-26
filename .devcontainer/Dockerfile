ARG VARIANT="20"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

RUN apt-get update

RUN apt-get install -y php ruby ruby-dev golang-go
RUN gem install syntax_tree -v 6.2.0

RUN wget https://github.com/mvdan/sh/releases/download/v3.9.0/shfmt_v3.9.0_linux_amd64 -O shfmt \
 && chmod a+x shfmt \
 && mv shfmt /usr/local/bin/shfmt

USER node
WORKDIR /home/node

RUN curl -LsSf https://astral.sh/ruff/0.6.3/install.sh | sh

RUN mkdir -p .config/git \
 && echo ".vscode/*" >> .config/git/ignore \
 && echo "*.code-workspace" >> .config/git/ignore \
 && echo ".history/" >> .config/git/ignore
