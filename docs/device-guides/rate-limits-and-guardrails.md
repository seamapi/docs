---
description: >-
  Learn about the rate limits and guardrails that Seam uses to maintain reliable
  service for all users.
---

# Rate Limits and Guardrails

In order to provide reliable service for all of our customers and API load predictability for our device partners, we have a number of rate limits and guardrails in place.

## Rate Limits

For requests with rate limits, exceeding these limits results in the corresponding API calls failing with a `429 Too Many Requests` response. You must then retry your request after the appropriate amount of time.

We enforce the following rate limits on a per-device basis:

<table><thead><tr><th width="243">Operation</th><th>Limit</th></tr></thead><tbody><tr><td><a href="../api/access_codes/create.md">Create an access code</a></td><td>10 access code creations per minute</td></tr><tr><td><a href="../api/access_codes/update.md">Update an access code</a></td><td>10 access code updates per minute</td></tr><tr><td><a href="../api/access_codes/delete.md">Delete an access code</a></td><td>20 access code deletions per minute</td></tr><tr><td><a href="../api/locks/lock_door.md">Lock a lock</a></td><td>15 lock requests per minute</td></tr><tr><td><a href="../api/locks/unlock_door.md">Unlock a lock</a></td><td>15 unlock requests per minute</td></tr></tbody></table>
