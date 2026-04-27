
# MCP Installation

The **Seam Docs MCP Server** is a public, read-only [Model Context Protocol](https://modelcontextprotocol.io/) server that gives Claude and other MCP-compatible clients access to Seam's developer documentation and device database. Connect it once, then ask Claude questions about the Seam API, capabilities, webhooks, SDK usage, and the 400+ supported device models — across smart locks, thermostats, access control systems, and noise sensors. Claude grounds its answers in the most up-to-date Seam docs.

The server is intended for developers integrating with Seam who want Claude to answer Seam questions accurately, whether they're looking up an API endpoint, checking which lock models support mobile keys, or finding the right integration guide. It is read-only: it cannot control devices, manage access codes, create resources, or perform any other write operations against the Seam API.

## Server Details

| Property       | Value                       |
| -------------- | --------------------------- |
| Server URL     | `https://mcp.seam.co/mcp`   |
| Transport      | Streamable HTTP             |
| Authentication | None — the server is public |

{% hint style="info" %}
No API key, account, or sign-up is required to use the Seam Docs MCP server. It only reads and returns Seam's public documentation.
{% endhint %}

## What You Can Ask

Once connected, you can ask Claude questions like the following, and Claude will fetch the answer from the Seam docs and device database:

- "How do I unlock a Schlage Encode lock with the Seam API?"
- "Show me the webhook payload for `lock.locked`."
- "What's the difference between an access code and an access grant?"
- "Which smart lock models support mobile keys and remote unlock?"
- "Compare August and Yale lock features for a hospitality deployment."
- "Find the right integration guide for property management workflows."
- "Does Seam support Salto KS access control systems?"
- "How do I create a Connect Webview from the Python SDK?"

## Connect From Claude.ai

1. Sign in to [claude.ai](https://claude.ai).
2. Open **Settings → Connectors**.
3. Click **Add custom connector**.
4. Set the **URL** to `https://mcp.seam.co/mcp`.
5. Set the **Name** to `Seam Docs`.
6. Save. No authentication is required.

The connector is now available to Claude in any new conversation.

## Connect From Claude Desktop

1. Open Claude Desktop and go to **Settings → Connectors**.
2. Click **Add custom connector**.
3. Set the **URL** to `https://mcp.seam.co/mcp`.
4. Set the **Name** to `Seam Docs`.
5. Save and restart Claude Desktop if prompted.

## Connect From Claude Code

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

## Available Tools

The Seam Docs MCP server exposes three read-only tools:

| Tool                | Display Name      | Description                                                                                              |
| ------------------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| `search_docs`       | Search Seam Docs  | Semantic search across all Seam documentation and the 400+ supported device models, ranked by relevance. |
| `get_doc`           | Get Doc Page      | Fetch the full content of any Seam documentation or device page.                                         |
| `list_doc_sections` | List Doc Sections | Browse the Seam documentation tree to discover available content.                                        |

Claude selects the appropriate tool automatically based on your prompt.

## Troubleshooting

- **403 Forbidden on connection** — The server only accepts requests from approved origins (`mcp.seam.co`, `claude.ai`, `app.claude.ai`, and `localhost`). Requests from other origins are rejected.
- **Empty search results** — If `search_docs` returns nothing, broaden your query. Use Seam API resource names (for example, `access_codes`) rather than SDK-specific method names, and use generic capability terms (for example, "mobile keys") when searching for devices.
- **Connection refused** — Confirm that your network allows outbound HTTPS to `mcp.seam.co`. Some corporate firewalls block custom MCP endpoints.

## Support

For questions or issues with the Seam Docs MCP server, contact [support@seam.co](mailto:support@seam.co).
