ARG VARIANT="20"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

RUN apt-get update

RUN apt-get install -y php ruby ruby-dev
RUN gem install standard -v 1.31.0

RUN wget https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/releases/download/v3.63.2/php-cs-fixer.phar -O php-cs-fixer \
 && chmod a+x php-cs-fixer \
 && mv php-cs-fixer /usr/local/bin/php-cs-fixer

USER node
WORKDIR /home/node

RUN curl -LsSf https://astral.sh/ruff/0.6.3/install.sh | sh

RUN mkdir -p .config/git \
 && echo ".vscode/*" >> .config/git/ignore \
 && echo "*.code-workspace" >> .config/git/ignore \
 && echo ".history/" >> .config/git/ignore
