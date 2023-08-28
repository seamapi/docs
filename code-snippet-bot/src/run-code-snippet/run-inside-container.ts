import Docker from "dockerode"
import Stream from "stream"
import fs from "fs-extra"
import os from "os"
import path from "path"
import tar from "tar-fs"

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
  const container = await docker.createContainer({
    Image: imageName,
    Cmd: ["/bin/sh", "-c", command],
    AttachStdout: true,
    AttachStderr: true,
    Tty: true,
  })

  // Write filesystem to temporary directory
  const testDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "code-snippet-bot-tmp-")
  )

  // Create the files from the filesystem config
  for (const [filepath, contents] of Object.entries(filesystem)) {
    const fullPath = path.join(testDir, filepath)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })
    fs.writeFileSync(fullPath, contents)
    if (fullPath.endsWith(".sh")) {
      fs.chmodSync(fullPath, "755")
    }
  }

  // Pack temporary directory into tar
  const tarStream = tar.pack(testDir)

  // Copy files to the container
  await new Promise<void>((resolve, reject) => {
    container.putArchive(tarStream, { path: "/" }, (err: any) => {
      if (err) reject(err)
      resolve()
    })
  })

  await fs.rmSync(testDir, { recursive: true })

  // Start the container
  // console.log(`Starting container [id: ${container.id}]...`)
  await container.start()

  const logStream = await container.logs({
    follow: true,
    stdout: true,
    stderr: true,
  })

  const output = {
    stdout: "",
    stderr: "", // TODO find some way to get stderr
  }

  logStream.on("data", (chunk: Buffer) => {
    const chunkStr = chunk.toString("utf8")
    output.stdout += chunkStr
  })

  return new Promise((resolve, reject) => {
    logStream.on("end", () => {
      resolve(output)
    })
    logStream.on("error", (err: any) => {
      reject(err)
    })
  })
}
