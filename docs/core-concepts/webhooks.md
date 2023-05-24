# Webhooks

You can add webhooks via the Seam Dashboard or programmatically. Let's start by looking at how to add and test a webhook via the dashboard.

![Press "Add Webhook" to create a webhook for your device events](<../.gitbook/assets/image (22).png>)

You can specify any public URL endpoint to receive webhook events by pasting the URL into the "Add Webhook" dialog.

![You can specify any internet-accessible URL for your webhook URL](<../.gitbook/assets/image (24).png>)

Webhook endpoints can receive many different types of events such as `device.connected` or `device.low_battery` . It's a good idea when getting started with webhooks to review the list of webhook event types and test your endpoint using the sandbox environment.

![The sandbox environment allows you to test sending requests to an endpoint.](<../.gitbook/assets/image (15).png>)

 You can view all the event types and their fields in the "Event Catalog" tab. The listed fields are marked "Optional" to make testing easier. You can expect all fields when receiving the events from production. 

 ![The sandbox environment allows you to test sending requests to an endpoint.](<../.gitbook/assets/image (27).png>)

 We use webhooks from svix! If you want more information about consuming events such as testing or verifying webhooks, you can get more info from their [docs](https://docs.svix.com/receiving/introduction).

## Retry Schedule for Webhooks

Seam delivers each webhook event based on a retry schedule with exponential backoff. Each message is attempted based on the following schedule, where each period is started following the failure of the preceding attempt.

* Immediately
* 5 seconds
* 5 minutes
* 30 minutes
* 2 hours
* 5 hours
* 10 hours
* 10 hours (in addition to the previous)

For example, an attempt that fails three times before eventually succeeding will be delivered roughly 35 minutes and 5 seconds following the first attempt.

If you remove or disable a webhook, delivery attempts to the endpoint will be disabled as well.

###
