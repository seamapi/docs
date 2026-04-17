# Sandbox Salto Space Access System

Use the following set of credentials to add the virtual Salto Space access system to your Seam [sandbox workspace](../../core-concepts/workspaces/#sandbox-workspaces):

## Sandbox Seam Bridge Connection Credentials

| Pairing Token                        | Bridge Name                       |
| ------------------------------------ | --------------------------------- |
| 123456 (or any six-character string) | My Network (or any unique string) |

## Salto Space Connection Credentials

### HTTP

<table><thead><tr><th width="311">System Name</th><th>Transport Type used by the Salto Space Server</th><th width="201.4000244140625">LAN URL of the Salto Space server</th><th width="101.800048828125">Username</th><th width="112.39990234375">Password</th></tr></thead><tbody><tr><td>Any string to identify this Salto Space site, for example, My Salto Space Site</td><td>HTTP</td><td>http://192.168.1.101:8100</td><td>jane</td><td>1234</td></tr></tbody></table>

### Salto Transport Protocol (STP)

| System Name                                                                    | Transport Type used by the Salto Space Server | Host of the Salto Space server                 | TCP/IP Port configured in the Salto Space server |
| ------------------------------------------------------------------------------ | --------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| Any string to identify this Salto Space site, for example, My Salto Space Site | STP (Salto Transport Protocol)                | Any IPv4 addresses, for example, 192.168.1.101 | Any port number, for example, 8100               |
