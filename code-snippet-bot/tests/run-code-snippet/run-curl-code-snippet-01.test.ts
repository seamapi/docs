import test from "ava"
import { runCurlCodeSnippet } from "../../src/run-code-snippet/run-curl-code-snippet"

test("run javascript code snippet 01", async (t) => {
  const { logged_content } = await runCurlCodeSnippet(`
curl https://connect.getseam.com/health;

curl \\
  -H "Authorization: Bearer \${SEAM_API_KEY}" \\
  https://connect.getseam.com/devices/list;
  `)

  t.is(
    logged_content[0],
    `{"note":"This is not part of the real API.","ok":true}`
  )
})
