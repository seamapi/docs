// NOTE it will not include example output, but this might be desirable
export const generalGuidelines = `

* Keep code samples as minimal as possible
* Use the device_id "device3" for examples that involve a single device
* Use the access_code_id "access_code2" for examples that involve a single access code
* Assume the Seam SDK Client has already been initialized for each code snippet
* Don't create extraneous functions, just write the code as if a simple script
* Use the correct tense for variables, for example, after creating a variable, call it a "createdResource" or "created_resource", after deleting a variable you have a "deletedResource" or "deleted_resource"
* Use specific variables names, for example don't use "resource" or "data" or "result"
* Don't handle errors unless the task specifically asks you to
* Generally, SDKs extract the resource inside the response, so something like
  \`seam.access_codes.get({ access_code_id: "access_code2" })\` will return an
  access code object, something like \`seam.access_codes.delete({/* ... */})\`
  will return an action_attempt object
* Always use specific variables names, for example don't say "deleted_resource",
  say "deleted_access_code", don't say "response" or "result", say "access_code"
* \`connected_account.user_identifier\` usually is of the shape \`{ email }\`


Here is some pseudo-code to illustrate good code snippets:

\`\`\`
# GOOD (if language uses snake case)
created_access_code = seam.access_codes.create(
  name: "My Access Code"
)

print(created_access_code)

# GOOD (if language uses snake case)
action_attempt = seam.access_codes.delete(
  access_code_id: "access_code2"
)

print(action_attempt.status) # success

# GOOD (if language uses snake case)
connect_webview = seam.connect_webviews.create(
  accepted_providers: ["august"]
)

# ... wait for webview to be completed

connect_webview = seam.connect_webviews.get(
  connect_webview_id: connect_webview.connect_webview_id
)

print(connect_webview.status) # authorized

# BAD - don't use functions or subroutines
function doCreation() {
  # BAD - don't handle errors
  try {
    # BAD - use specific name
    created_resource = seam.access_codes.create(
      # BAD - use specific name
      name: "My Resource"
    )
  # BAD - don't handle errors
  } except Exception as e {
    print(e)
  }
}

\`\`\`

`.trim()
