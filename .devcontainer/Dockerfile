ARG VARIANT="18"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

RUN apt-get update

# Install Python
RUN apt-get install -y python3 python3-pip python-is-python3

# Install Ruby
RUN apt-get install -y ruby ruby-dev

WORKDIR /home/node/snippet-playground/ruby
RUN gem install seamapi

WORKDIR /home/node/snippet-playground/python
RUN pip install seamapi --break-system-packages

WORKDIR /home/node/snippet-playground/javascript
RUN npm install -g seamapi

USER node
WORKDIR /home/node

# Install dotnet
RUN wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh \
 && chmod +x dotnet-install.sh \
 && ./dotnet-install.sh --channel 7.0
ENV PATH="$PATH:/home/node/.dotnet"

RUN mkdir -p .config/git \
 && echo ".vscode/*" >> .config/git/ignore \
 && echo "*.code-workspace" >> .config/git/ignore \
 && echo ".history/" >> .config/git/ignore
