import test from "ava"
import { parseGitbookCodeSnippets } from "../src/parse-gitbook-code-snippets"

test("parseGitbookCodeSnippets parses code snippets correctly (1)", (t) => {
  const exampleString = `
{% tabs %}
{% tab title="Javascript" %}
\`\`\`javascript
console.log("Hello, World!");
\`\`\`
{% endtab %}
{% tab title="Python" %}
\`\`\`python
print("Hello, World!")
\`\`\`
{% endtab %}
{% endtabs %}
  `

  const expectedOutput = {
    javascript: 'console.log("Hello, World!");',
    python: 'print("Hello, World!")',
  }

  const result = parseGitbookCodeSnippets(exampleString)

  t.deepEqual(result, expectedOutput)
})

test.only("parseGitbookCodeSnippets parses code snippets correctly (2)", (t) => {
  const exampleString = `{% tabs %}
{% tab title="Javascript" %}
\`\`\`javascript
// Use Seam SDK to create a connect webview with the provider nuki
const createdConnectWebview = await seam.connectWebviews.create({
  accepted_providers: ["nuki"]
});

// The webview automatically opens a browser, thus, you can't check its login status

// Print the webview url
console.log(createdConnectWebview.url);
\`\`\`
{% endtab %}
{% tab title="Python" %}
\`\`\`python
# Create a webview with Nuki as the provider
created_webview = seam.connect_webviews.create(accepted_providers=["nuki"])

# Assert that login is not yet successful
assert created_webview.login_successful is False

# Print the URL of the webview
print(created_webview.url)
\`\`\`
{% endtab %}
{% tab title="Ruby" %}
\`\`\`ruby
# Create a connect webview with the provider "nuki"
created_webview = seam.connect_webviews.create(accepted_providers: ["nuki"])

# The webview will not be logged in, which can be confirmed
raise 'Login should not be succesful' unless !created_webview.login_successful

# Retrieve and print out the url of the webview
puts created_webview.url
\`\`\`
{% endtab %}
{% tab title="PHP" %}
\`\`\`php
<?php
// initiate the SDK client, you should replace this with your SDK client init portion
$seam = new SeamSeamClient("YOUR_API_KEY");

// create a connect webview with provider nuki
$connect_webview = $seam->connect_webviews->create([
  'accepted_providers' => ['nuki']
]);

// check if the login was successful
assert($connect_webview->login_successful === false);

// print the connect webview URL
print($connect_webview->url);
?>
\`\`\`
{% endtab %}
{% endtabs %}`

  const result = parseGitbookCodeSnippets(exampleString)

  t.deepEqual(result, {
    javascript:
      "// Use Seam SDK to create a connect webview with the provider nuki\n" +
      "const createdConnectWebview = await seam.connectWebviews.create({\n" +
      '  accepted_providers: ["nuki"]\n' +
      "});\n" +
      "\n" +
      "// The webview automatically opens a browser, thus, you can't check its login status\n" +
      "\n" +
      "// Print the webview url\n" +
      "console.log(createdConnectWebview.url);\n",
    python:
      "# Create a webview with Nuki as the provider\n" +
      'created_webview = seam.connect_webviews.create(accepted_providers=["nuki"])\n' +
      "\n" +
      "# Assert that login is not yet successful\n" +
      "assert created_webview.login_successful is False\n" +
      "\n" +
      "# Print the URL of the webview\n" +
      "print(created_webview.url)\n",
    ruby:
      '# Create a connect webview with the provider "nuki"\n' +
      'created_webview = seam.connect_webviews.create(accepted_providers: ["nuki"])\n' +
      "\n" +
      "# The webview will not be logged in, which can be confirmed\n" +
      "raise 'Login should not be succesful' unless !created_webview.login_successful\n" +
      "\n" +
      "# Retrieve and print out the url of the webview\n" +
      "puts created_webview.url\n",
    php:
      "<?php\n" +
      "// initiate the SDK client, you should replace this with your SDK client init portion\n" +
      '$seam = new SeamSeamClient("YOUR_API_KEY");\n' +
      "\n" +
      "// create a connect webview with provider nuki\n" +
      "$connect_webview = $seam->connect_webviews->create([\n" +
      "  'accepted_providers' => ['nuki']\n" +
      "]);\n" +
      "\n" +
      "// check if the login was successful\n" +
      "assert($connect_webview->login_successful === false);\n" +
      "\n" +
      "// print the connect webview URL\n" +
      "print($connect_webview->url);\n" +
      "?>\n",
  })
})
