# Rate Limits and Guardrails

In order to provide a great experience for all of our customers, we have a number of rate limits and guardrails in place.

## Rate Limits

For requests with rate limits, exceeding the limits will result in the corresponding API calls failing with a `429 Too Many Requests`
response. You will have to retry your request after the appropriate amount of time.

The following rate limits are enforced on a per-device basis:

- 10 ongoing access code creations per minute
- 15 lock requests per minute
- 15 unlock requests per minute
