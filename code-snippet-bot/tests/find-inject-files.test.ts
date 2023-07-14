import test from "ava"
import mockFs from "mock-fs"
import { findInjectFiles } from "../src/find-inject-files"

test.before((t) => {
  // Setup mock file system
  mockFs({
    "/testdir": {
      "file1.md": "<!-- CODE INJECT START -->\nHello, World!",
      "file2.md": "Hello, World!",
      "file3.md": "<!-- CODE INJECT START -->\nHello, OpenAI!",
      subdir: {
        "file4.md": "Hello, World!",
        "file5.md": "<!-- CODE INJECT START -->\nHello, World!",
      },
    },
  })
})

test.after.always((t) => {
  // Restore file system
  mockFs.restore()
})

test("findInjectFiles finds files with code injects", async (t) => {
  const injectFiles = await findInjectFiles("/testdir")

  t.deepEqual(
    injectFiles.sort(),
    [
      "/testdir/file1.md",
      "/testdir/file3.md",
      "/testdir/subdir/file5.md",
    ].sort()
  )
})
