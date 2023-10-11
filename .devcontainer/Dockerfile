ARG VARIANT="18"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

RUN apt-get update

# Install Python
RUN apt-get install -y python3 python3-pip python-is-python3

# Install Ruby
RUN apt-get install -y ruby ruby-dev

# Install dotnet
RUN wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh \
 && chmod +x dotnet-install.sh \
 && ./dotnet-install.sh --channel 7.0 \
 && ln -s /root/.dotnet/dotnet /bin/dotnet

WORKDIR /home/node/snippet-playgroun/ruby
RUN gem install seamapi

WORKDIR /home/node/snippet-playgroun/csharp
RUN dotnet new console && dotnet add package seam

USER node
WORKDIR /home/node

WORKDIR /home/node/snippet-playgroun/javascript
RUN npm install seamapi

WORKDIR /home/node/snippet-playgroun/python
RUN pip install seamapi

RUN mkdir -p .config/git \
 && echo ".vscode/*" >> .config/git/ignore \
 && echo "*.code-workspace" >> .config/git/ignore \
 && echo ".history/" >> .config/git/ignore
