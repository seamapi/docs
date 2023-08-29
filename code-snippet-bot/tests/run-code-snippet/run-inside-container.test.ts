import test from "ava"

import { runInsideContainer } from "../../src/run-code-snippet/run-inside-container"

test("runInsideContainer", async (t) => {
  const output = await runInsideContainer({
    command: "/root/run.sh",
    filesystem: {
      "/root/run.sh": `
echo 'hello world!';
echo 'how ya doin';
      `.trim(),
    },
    imageName: "alpine",
  })
  t.is(output.stdout, "hello world!\r\nhow ya doin\r\n")
})
