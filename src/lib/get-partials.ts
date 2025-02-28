import fs from 'fs'
import path from 'path'

const PARTIALS_DIR = path.join(process.cwd(), 'src', 'layouts', 'partials')

export function getPartials(): Record<string, string> {
  const partials: Record<string, string> = {}

  try {
    const files = fs.readdirSync(PARTIALS_DIR)

    for (const filename of files) {
      if (!filename.endsWith('.hbs')) {
        continue
      }

      const partialName = filename.replace('.hbs', '')
      const partialPath = path.join(PARTIALS_DIR, filename)

      try {
        const content = fs.readFileSync(partialPath, 'utf8')
        partials[partialName] = content
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Failed to read partial ${filename}:`, err)
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to read partials directory:', err)
  }

  return partials
}
