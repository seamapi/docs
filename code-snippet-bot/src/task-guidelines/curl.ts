export const curlGuidelines = `

* Use \`-H "Authorization: Bearer \${SEAM_API_KEY}"\` to indicate the insert of
  an API key
* Always provide \`-H 'Content-Type: application/json'\` and \`-d\` when POSTing a JSON
  body
* Always use \`-X POST\` to specify a request is a POST request
* Use \`\\\` to break up long lines, try to keep "one thing" per line, e.g. one header, one parameter etc.
* Use query parameters for a GET request
* NEVER use \`PUT\`, \`PATCH\`, or \`DELETE\`, use \`POST\` or \`GET\` instead
* Don't add extraneous headers
* Don't set variables or echo
* NEVER leave comments with the output

Here are some examples of GOOD curl snippets:

\`\`\`bash
curl \
  -H "Authorization: Bearer \${SEAM_API_KEY}" \
  https://connect.getseam.com/devices/list
\`\`\`


\`\`\`bash
curl -X POST \\
  -H "Authorization: Bearer \${SEAM_API_KEY}" \\
  -H 'Content-Type: application/json' \\
  -d '{
    "access_code_id":"access_code2"
  }' \\
  https://connect.getseam.com/access_codes/delete␊
\`\`\`

`.trim()
