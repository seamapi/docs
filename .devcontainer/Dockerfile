ARG VARIANT="18"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

RUN apt-get update

# Install Python
RUN apt-get install -y python3 python3-pip python-is-python3

WORKDIR /home/node/snippet-playgroun/python
RUN pip install seamapi

# Install Ruby
RUN apt-get install -y ruby ruby-dev

WORKDIR /home/node/snippet-playgroun/ruby
RUN gem install seamapi

# Install dotnet
RUN wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
RUN chmod +x dotnet-install.sh
RUN ./dotnet-install.sh --channel 7.0
RUN ln -s /config/.dotnet/dotnet /bin/dotnet

WORKDIR /home/node/snippet-playgroun/dotnet
RUN dotnet new console \
 && dotnet add package seam \
 && rm Program.cs \
 && mv sample.cs Program.cs

USER node
WORKDIR /home/node

RUN npm install seamapi

RUN mkdir -p .config/git \
 && echo ".vscode/*" >> .config/git/ignore \
 && echo "*.code-workspace" >> .config/git/ignore \
 && echo ".history/" >> .config/git/ignore
