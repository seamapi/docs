import test from "ava"
import mockFs from "mock-fs"
import { findFilesToInjectPropertiesInto } from "../src/find-files-to-inject-properties-into"

test.before((t) => {
  // Setup mock file system
  mockFs({
    "/testdir": {
      "file1.md":
        "<!-- INJECT PROPERTIES /access_codes/create -->\n\nOther stuff!",
      "file2.md": "I'm a normal markdown file!",
    },
  })
})

test.after.always((t) => {
  // Restore file system
  mockFs.restore()
})

test("findFilesToInjectPropertiesInto", async (t) => {
  const injectFiles = await findFilesToInjectPropertiesInto("/testdir")

  t.deepEqual(injectFiles.sort(), ["/testdir/file1.md"].sort())
})
