import fs from 'fs'
import Handlebars from 'handlebars'
import path from 'path'

const PARTIALS_DIR = path.join(process.cwd(), 'src', 'layouts', 'partials')

function registerPartials(): void {
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
        Handlebars.registerPartial(partialName, content)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Failed to register partial ${filename}:`, err)
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to read partials directory:', err)
  }
}

registerPartials()
