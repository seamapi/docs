import Seam from "seamapi"

const seam = new Seam({
  endpoint: `https://r${Math.random()
    .toString(16)
    .slice(2)}.fakeseamconnect.seam.vc`,
  apiKey: "seam_apikey1_token",
})

console.log(await seam.devices.list())
