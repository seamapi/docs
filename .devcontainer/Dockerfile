ARG VARIANT="20"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

RUN apt-get update

RUN apt-get install -y ruby ruby-dev
RUN gem install standard

USER node
WORKDIR /home/node

RUN curl -LsSf https://astral.sh/ruff/0.5.0/install.sh | sh

RUN mkdir -p .config/git \
 && echo ".vscode/*" >> .config/git/ignore \
 && echo "*.code-workspace" >> .config/git/ignore \
 && echo ".history/" >> .config/git/ignore
