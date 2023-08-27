import Docker from "dockerode"
import Stream from "stream"
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

export const runInsideContainer = async (
  config: RunInContainerConfig
): Promise<RunInContainerOutput> => {
  const docker = new Docker()
  const imageName = config.imageName
  const filesystem = config.filesystem
  const command = config.command

  // Pull the image
  await new Promise<void>((resolve, reject) => {
    docker.pull(imageName, (err: any, stream: any) => {
      if (err) return reject(err)
      docker.modem.followProgress(stream, onFinished)
      function onFinished(err: any, output: any) {
        if (err) return reject(err)
        resolve()
      }
    })
  })

  // Create the container
  // Create the container
  const container = await docker.createContainer({
    Image: imageName,
    // Cmd: ["/bin/sh", "-c", command],
    Cmd: ["/bin/ls", "/root"],
    AttachStdout: true,
    AttachStderr: true,
    Tty: true,
  })

  // Copy files to the container
  console.log("Copying files to container...")
  for (const path in filesystem) {
    const file_content = filesystem[path]
    await new Promise<void>((resolve, reject) => {
      const archive = new Stream.Readable({
        objectMode: true,
        read() {
          this.push(file_content)
          this.push(null)
        },
      })
      container.putArchive(archive, { path: "/root" }, (err: any) => {
        if (err) reject(err)
        else resolve()
      })
    })
  }

  // Start the container
  console.log("Starting container...")
  await container.start()

  // Get logs
  const logStream = await container.logs({
    follow: true,
    stdout: true,
    stderr: true,
  })

  let stdout = ""
  let stderr = ""

  logStream.on("data", (chunk: Buffer) => {
    const chunkStr = chunk.toString("utf8")
    if (chunkStr.startsWith("stdout")) {
      stdout += chunkStr.slice("stdout".length)
    } else if (chunkStr.startsWith("stderr")) {
      stderr += chunkStr.slice("stderr".length)
    }
  })

  return new Promise((resolve, reject) => {
    logStream.on("end", () => {
      resolve({ stdout, stderr })
    })
    logStream.on("error", (err: any) => {
      reject(err)
    })
  })
}
