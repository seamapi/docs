
# Authentication

Export your API key as an environment variable. Seam client libraries automatically pick up this exported key. For example:

```
$ export SEAM_API_KEY=seam_test2bMS_94SrGUXuNR2JmJkjtvBQDg5c
```

Next, run the following code to confirm that you are correctly authenticated:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
from seam import Seam

seam = Seam()  # Seam automatically uses your exported SEAM_API_KEY.

workspace = seam.workspaces.get()
pprint(workspace)
```

**Output:**

```
Workspace(
  workspace_id='00000000-0000-0000-0000-000000000000',
  name='Sandbox',
  company_name='Acme',
  connect_partner_name='Acme',
  is_sandbox=True
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/workspaces/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Output:**

```json
{
  "workspace": {
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "name": "Sandbox",
    "company_name": "Acme",
    "connect_partner_name": "Acme",
    "is_sandbox": true
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
import { Seam } from "seam";

const seam = new Seam(); // Seam automatically uses your exported SEAM_API_KEY.

const checkAuth = async () => {
  const workspace = await seam.workspaces.get();
  console.log(workspace);
}

checkAuth();
```

**Output:**

```json
{
  workspace_id: '00000000-0000-0000-0000-000000000000',
  name: 'Sandbox',
  company_name: 'Acme',
  connect_partner_name: 'Acme',
  is_sandbox": true
} 
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
require "seam"

seam = Seam.new() # Seam automatically uses your exported SEAM_API_KEY.

workspace = seam.workspaces.get()

puts workspace.inspect
```

**Output:**

```
<
  Seam::Workspace:0x0070328                                          
    workspace_id="00000000-0000-0000-0000-000000000000"
    name="Sandbox"
    company_name="Acme"      
    connect_partner_name="Acme"
    is_sandbox=true
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
<?php
require 'vendor/autoload.php';

$seam = new Seam\SeamClient(); // Seam automatically uses your exported SEAM_API_KEY.

$workspace = $seam->workspaces->get();

echo json_encode($workspace, JSON_PRETTY_PRINT);
```

**Output:**

```json
{
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "name": "Sandbox",
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "is_sandbox": true
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
using Seam.Client;

var seam = new SeamClient(apiToken: SEAM_API_KEY);

var workspace = seam.Workspaces.Get();

Console.WriteLine(workspace);
```

**Output:**

```json
{
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "name": "Sandbox",
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "is_sandbox": true
}
```
{% endtab %}



{% endtabs %}

