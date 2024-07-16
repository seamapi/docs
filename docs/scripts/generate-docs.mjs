import fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'

import { createBlueprint } from '@seamapi/blueprint'
import * as types from '@seamapi/types/connect'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const blueprint = createBlueprint(types)

const data = mapBlueprintToTemplateData(blueprint)

const templatePath = path.join(__dirname, 'templates', 'template.ejs')

fs.readFile(templatePath, 'utf8', (err, templateSource) => {
  if (err) {
    console.error('Error reading template file:', err)
    return
  }

  const markdownContent = ejs.render(templateSource, data)

  fs.writeFileSync('output.md', markdownContent, 'utf8')

  console.log('Markdown file generated successfully.')
})

function mapBlueprintToTemplateData(blueprint) {
  const route = blueprint.routes.find(route => route.path === '/acs/systems')
  const endpoint = route.endpoints.find(endpoint => endpoint.path === '/acs/systems')

  return {
    objectName: "List Systems",
    objectDescription: "Get all access control systems",
    methods: [
      {
        methodName: endpoint.title,
        description: "Returns a list of all [access control systems](../../../products/access-systems/).",
        swaggerSrc: "https://connect.getseam.com/openapi.json",
        swaggerPath: endpoint.path,
        swaggerMethod: endpoint.request.preferredMethod.toLowerCase(),
        parameters: endpoint.request.parameters.map(param => ({
          name: param.name,
          type: param.schema.type,
          required: param.required,
          description: param.description,
        })),
        responseProperties: blueprint.resources.acs_system.properties,
        sampleRequest: `await seam.acs.systems.list();`,
        sampleResponse: `{
          "acs_systems": [
            {
              "acs_system_id": "11111111-1111-1111-1111-111111111111",
              "name": "Example Inc",
              "workspace_id": "00000000-0000-0000-0000-000000000000",
              "created_at": "2023-11-30T06:27:14.961Z",
              "external_type": "pti_site",
              "external_type_display_name": "PTI site",
              "connected_account_ids": [
                "11111111-1111-1111-1111-222222222222"
              ],
              "image_url": "https://connect.getseam.com/assets/images/acs_systems/pti_site.png",
              "image_alt_text": "PTI site Logo"
            }
          ],
          "ok": true
        }`,
      },
    ],
  }
}
