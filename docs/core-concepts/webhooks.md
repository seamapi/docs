---
description: Learn about using webhooks to receive notifications of events.
---

# Webhooks

A webhook is an HTTP callback that you configure with an external service. When a specific event occurs, the service sends an HTTP POST request with a JSON payload to the URL you provide. This allows you to receive real-time notifications and process events immediately.

## Configuring Webhooks

You can configure endpoints in each workspace for your app to receive event notifications for resources like devices and connected accounts.

**To configure webhook endpoints:**

1. **Access the Webhooks Section:**
In the left navigation pane of the Seam Console, click Webhooks.

2. **Add a New Webhook:**
Click + Add Webhook.

3. **Enter the Webhook Details:**
- In the Create Webhook dialog, type your public webhook URL.
- Select the event types (for example, device.connected or device.low_battery) for which you want to receive events.

4. **Secure Your Webhook:**
Click Create. Copy your webhook secret and store it somewhere secure; you will use this secret to validate the payloads received at your endpoint.

5. **Test Your Webhook:** You can test your endpoint using external tools such as [Beeceptor](https://beeceptor.com/webhook-integration/) and [ngrok](https://ngrok.com/).

> **Note:** When using external tools, use them carefully and ensure that you do not expose sensitive information or compromise your system’s security.

You can add webhooks through the Seam Console or programmatically. Let's start by looking at how to add and test a webhook using the Seam Console.

![Click + Add Webhook to create a webhook for your device events.](<../.gitbook/assets/image (22).png>)

You can specify any public URL endpoint to receive webhook events by pasting the URL into the **Create Webhook** dialog.

![You can specify any internet-accessible URL as your webhook URL.](<../.gitbook/assets/image (24).png>)

Webhook endpoints can receive many different types of events, such as `device.connected` or `device.low_battery`. It's a good idea when getting started with webhooks to review the list of webhook [event types](../api-clients/events/#event-types) and test your endpoint using the Svix sandbox environment.

![The Svix sandbox environment enables you to test sending requests to an endpoint.](<../.gitbook/assets/image (15).png>)

You can view all the event types and the included fields in the **Event Catalog** tab.

![Go to the "Event Catalog" tab to view all available events.](<../.gitbook/assets/image (27).png>)

We use webhooks from Svix. For more information about consuming events, such as testing or verifying webhooks, see the [Svix docs](https://docs.svix.com/receiving/introduction).

## Webhook Security

Seam webhooks are signed using an HMAC with SHA-256. If you wish to verify those signatures on your end, contact our team.

**Signature Verification**

- **Webhook Secret:** Use the webhook secret from your configuration to verify that incoming payloads are genuine.
- **Signature Header:** Look for a signature header (e.g., X-Signature) in each request. Compute an HMAC (using SHA-256, for example) from the payload and compare it with the signature.

**Example (Node.js):**

```
const crypto = require('crypto');

function verifySignature(secret, payload, signature) {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const digest = hmac.digest('hex');
  return digest === signature;
}
```


## Handling Failures and Retries

Your webhook endpoint must be able to handle failures gracefully. If an event delivery fails (for example, due to a non-2xx HTTP status code), Seam automatically retries delivery using an exponential backoff schedule.

### Retry Schedule

The following table outlines the retry delays after each failed attempt:

| Attempt         | Delay After Previous Attempt |
|-----------------|-------------------------------|
| 1 (Initial)     | Immediately                   |
| 2               | 5 seconds                     |
| 3               | 5 minutes                     |
| 4               | 30 minutes                    |
| 5               | 2 hours                       |
| 6               | 5 hours                       |
| 7               | 10 hours                      |
| 8               | 10 additional hours           |

Example: If an event fails three times and then succeeds, the final successful delivery will occur roughly 35 minutes and 5 seconds after the first attempt.
