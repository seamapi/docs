using Seam.Client;

var r = new string(Enumerable.Range(0, 10).Select(_ => "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[new Random().Next(36)]).ToArray());


// Get a Seam Client
var seam = new SeamClient(
    basePath: string.Format("https://{0}.fakeseamconnect.seam.vc", r),
    apiToken: "seam_apikey1_token"
);

var devices = seam.Devices.List();

foreach (var device in devices)
{
    // NOTE: in the future Console.WriteLine(device) will print
    // something pretty, but currently it doesn't print pretty
    Console.WriteLine(device.Properties.Name);
}