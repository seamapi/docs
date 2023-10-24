import test from "ava"
import { runCsharpCodeSample } from "../../src/run-code-snippet/run-csharp-code-snippet"

test("run csharp code snippet 02", async (t) => {
  const { logged_content, execution_result } = await runCsharpCodeSample(`
  var devices = seam.Devices.List();
  
  foreach (var device in devices)
  {
      // NOTE: in the future Console.WriteLine(device) will print
      // something pretty, but currently it doesn't print pretty
      Console.WriteLine(device.Properties.Name);
  }
  `)

  // Assert that the execution result and log contain the expected output
  t.is(
    execution_result,
    ["Fake August Lock 1", "Back Door", "Thermostat 1", "Bathroom Door"].join(
      "\n"
    )
  )
})
