
# Installation

There are two ways to start working with Seam:

- **Seam SDKs** — Install one of the official SDKs to call the Seam API from your application.
- **Seam Docs MCP Server** — Connect Claude or another MCP-compatible client to read the Seam documentation directly.

You can use either or both, depending on your workflow.

## Seam SDKs

Install one of the Seam SDKs in the programming language of your choice. Seam supports many programming languages, such as the following:

* JavaScript / TypeScript ([npm](https://www.npmjs.com/package/seam), [GitHub](https://github.com/seamapi/javascript))
* Python ([pip](https://pypi.org/project/seam/), [GitHub](https://github.com/seamapi/python))
* Ruby Gem ([rubygem](https://rubygems.org/gems/seam), [GitHub](https://github.com/seamapi/ruby))
* PHP ([packagist](https://packagist.org/packages/seamapi/seam), [GitHub](https://github.com/seamapi/php))
* C# ([nuget](https://www.nuget.org/packages/Seam), [GitHub](https://github.com/seamapi/csharp))

{% tabs %}
{% tab title="JavaScript" %}
```bash
npm i seam
```
{% endtab %}

{% tab title="Python" %}
```bash
pip install seam
# For some development environments, use pip3 in this command instead of pip.
```
{% endtab %}

{% tab title="Ruby" %}
```bash
bundle add seam
```
{% endtab %}

{% tab title="PHP" %}
```bash
composer require seamapi/seam
```
{% endtab %}

{% tab title="C#" %}
Install using [nuget](https://www.nuget.org/packages/Seam).
{% endtab %}

{% endtabs %}

## Seam Docs MCP Server

The **Seam Docs MCP Server** is a public, read-only [Model Context Protocol](https://modelcontextprotocol.io/) server that gives Claude and other MCP-compatible clients access to the Seam documentation. Connect it once, then ask Claude questions about the Seam API, capabilities, webhooks, and SDK usage. Claude grounds its answers in the most up-to-date Seam docs.

The server is intended for developers integrating with Seam who want Claude to answer Seam documentation questions accurately. It is read-only: it cannot control devices, manage access codes, create resources, or perform any other write operations against the Seam API.

### Server Details

| Property         | Value                       |
| ---------------- | --------------------------- |
| Server URL       | `https://mcp.seam.co/mcp`   |
| Transport        | Streamable HTTP             |
| Authentication   | None — the server is public |

{% hint style="info" %}
No API key, account, or sign-up is required to use the Seam Docs MCP server. It only reads and returns Seam's public documentation.
{% endhint %}

### What You Can Ask

Once connected, you can ask Claude questions like the following, and Claude will fetch the answer from the Seam docs:

* "How do I unlock a Schlage Encode lock with the Seam API?"
* "Show me the webhook payload for `lock.locked`."
* "What's the difference between an access code and an access grant?"
* "Which endpoints are available for managing thermostat schedules?"
* "How do I create a Connect Webview from the Python SDK?"
* "List the simulation endpoints for sandbox locks."

### Connect From Claude.ai

1. Sign in to [claude.ai](https://claude.ai).
2. Open **Settings → Connectors**.
3. Click **Add custom connector**.
4. Set the **URL** to `https://mcp.seam.co/mcp`.
5. Set the **Name** to `Seam Docs`.
6. Save. No authentication is required.

The connector is now available to Claude in any new conversation.

### Connect From Claude Desktop

1. Open Claude Desktop and go to **Settings → Connectors**.
2. Click **Add custom connector**.
3. Set the **URL** to `https://mcp.seam.co/mcp`.
4. Set the **Name** to `Seam Docs`.
5. Save and restart Claude Desktop if prompted.

### Connect From Claude Code

Run the following command from your terminal:

```bash
claude mcp add --transport http seam-docs https://mcp.seam.co/mcp
```

Or add the following entry to your Claude Code MCP configuration file:

```json
{
  "mcpServers": {
    "seam-docs": {
      "type": "http",
      "url": "https://mcp.seam.co/mcp"
    }
  }
}
```

### Available Tools

The Seam Docs MCP server exposes three read-only tools:

| Tool                | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `search_docs`       | Semantic search across all Seam documentation.               |
| `get_doc`           | Fetch the full content of a specific Seam documentation page. |
| `list_doc_sections` | Browse the Seam documentation tree structure.                |

Claude selects the appropriate tool automatically based on your prompt.

### Troubleshooting

* **403 Forbidden on connection** — The server only accepts requests from approved origins (`mcp.seam.co`, `claude.ai`, `app.claude.ai`, and `localhost`). Requests from other origins are rejected.
* **Empty search results** — If `search_docs` returns nothing, broaden your query. Use Seam API resource names (for example, `access_codes`) rather than SDK-specific method names.
* **Connection refused** — Confirm that your network allows outbound HTTPS to `mcp.seam.co`. Some corporate firewalls block custom MCP endpoints.

### Support

For questions or issues with the Seam Docs MCP server, contact [support@seam.co](mailto:support@seam.co).

