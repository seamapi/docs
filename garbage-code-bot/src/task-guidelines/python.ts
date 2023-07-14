export const pythonTaskGuidelines = `

* The python SDK methods are structured similar to the endpoints, for example,
  "/access_codes/create" becomes 'seam.access_codes.create(name="Some Name")' in
  the python SDK
* The python SDK has DataClasses to represent every resource, e.g. AccessCode,
  Device, ActionAttempt, ConnectedAccount etc.
* \`seam.access_codes.create\` returns an AccessCode dataclass object
* \`seam.access_codes.delete\` returns an ActionAttempt dataclass object

\`\`\`python
# GOOD
access_code = seam.access_codes.create(
  name="Some Access Code"
)

print(access_code)

# GOOD
action_attempt = seam.access_codes.delete(
  access_code_id="access_code2"
)

print(action_attempt)

# BAD - "result" is an unspecific variable name
result = seam.access_codes.delete(access_code_id="access_code2")

# BAD - there are no nested resources returned from the SDK
print(result.action_attempt.status) # success
\`\`\`

`.trim()
