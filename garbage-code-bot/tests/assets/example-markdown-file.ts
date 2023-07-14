export const example_markdown_file = `

## 2 — Link August Account with Seam

To control your August lock via the Seam API, you must first authorize your Seam workspace against your August account. To do so, Seam provides[ Connect Webviews](../core-concepts/connect-webviews.md): pre-built UX flows that walk you through authorizing your application to control your August lock.

#### Request a Connect Webview

<!-- CODE INJECT START

Create a connect webview and print the url

-->
{% tabs %}
{% tab title="Python" %}
\`\`\`python
from seamapi import Seam

seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["august"])

assert webview.login_successful is False

# Send the webview URL to your user
print(webview.url)
\`\`\`
{% endtab %}

{% tab title="Javascript" %}
\`\`\`javascript
import Seam from 'seamapi'

const seam = new Seam()

const connectWebview = await seam.connectWebviews.create({
  accepted_providers: ['august'],
})

console.log(connectWebview.login_successful) // false

// Send the webview URL to your user
console.log(connectWebview.url)
\`\`\`
{% endtab %}

{% tab title="Ruby" %}
<pre class="language-ruby"><code class="lang-ruby">require "seamapi"

<strong>seam = Seam::Client.new(api_key: "MY_API_KEY")
</strong>
webview = seam.connect_webviews.create(
  accepted_providers: ["august"]
)

puts webview.login_successful # false

# Send the webview URL to your user 
puts webview.url
</code></pre>
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->

#### Authorize Your Workspace

Navigate to the URL returned by the Webview object. Since you are using a sandbox workspace, complete the login flow by entering the August [sandbox test accounts ](https://docs.seam.co/latest/device-guides/sandbox-and-sample-data)credentials below:

* **email:** jane@example.com
* **password:** 1234
* **2-factor-auth:** 123456

<figure><img src="../.gitbook/assets/connect-flow-screens.png" alt=""><figcaption><p>Seam Connect Webview flow to connect August account with Seam</p></figcaption></figure>

Confirm the Connect Webview was successful by querying its status:

<!-- CODE INJECT START

Retrieve a connect webview and print if the login was successful

-->
{% tabs %}
{% tab title="Python" %}
\`\`\`python
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

assert updated_webview.login_successful # true
\`\`\`
{% endtab %}

{% tab title="Javascript" %}
\`\`\`javascript
const updatedWebview = await seam.connectWebviews.get(
  connectWebview.connect_webview_id,
)

console.log(updatedWebview.login_successful) // true
\`\`\`
{% endtab %}

{% tab title="Ruby" %}
\`\`\`ruby
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

puts updated_webview.login_successful # true
\`\`\`
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->

## 3 — Retrieve August Lock Devices

`.trim()
