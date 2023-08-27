import Docker from "dockerode"
import fs from "fs-extra"

export interface RunInContainerConfig {
  imageName: string
  filesystem: {
    [path: string]: string
  }
  command: string
}

export interface RunInContainerOutput {
  stdout: string
  stderr: string
}

// export async function runDockerContainer() {
//   const docker = new Docker()
//   const imageName = "ubuntu:latest"
//   const scriptPathOnHost = "./run.sh"
//   const scriptPathInContainer = "/tmp/run.sh"

//   // Pull the image
//   await new Promise((resolve, reject) => {
//     docker.pull(imageName, (err, stream) => {
//       if (err) return reject(err)
//       docker.modem.followProgress(stream, onFinished)
//       function onFinished(err, output) {
//         if (err) return reject(err)
//         resolve()
//       }
//     })
//   })

//   // Create the container
//   const container = await docker.createContainer({
//     Image: imageName,
//     Cmd: [
//       "/bin/sh",
//       "-c",
//       `chmod +x ${scriptPathInContainer} && ${scriptPathInContainer}`,
//     ],
//     AttachStdout: true,
//     AttachStderr: true,
//   })

//   // Copy run.sh to the container
//   await new Promise((resolve, reject) => {
//     const archive = fs.createReadStream(scriptPathOnHost)
//     container.putArchive(archive, { path: "/tmp" }, (err) => {
//       if (err) reject(err)
//       else resolve()
//     })
//   })

//   // Start the container
//   await container.start()

//   // Get logs
//   const logStream = await container.logs({
//     follow: true,
//     stdout: true,
//     stderr: true,
//   })

//   logStream.on("data", (chunk) => {
//     console.log(chunk.toString("utf8"))
//   })

//   logStream.on("end", () => {
//     // Handle completion, possibly remove the container, etc.
//   })
// }

export const runInsideContainer = async (
  config: RunInContainerConfig
): Promise<RunInContainerOutput> => {}
