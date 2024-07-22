import { promises as fs } from 'fs'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Blueprint, createBlueprint } from '@seamapi/blueprint'
import * as types from '@seamapi/types/connect'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//@ts-expect-error
const blueprint = createBlueprint(types)
console.log(JSON.stringify(blueprint))

const data = mapBlueprintToTemplateData(blueprint)

const templatePath = path.join(__dirname, '../templates/template.ejs')

async function main() {
  try {
    const templateSource = await fs.readFile(templatePath, 'utf8')
    const markdownContent = ejs.render(templateSource, data)
    await fs.writeFile(
      path.join(__dirname, '../../docs/api-clients/access-control-systems/systems/list-systems-test.md'),
      markdownContent,
      'utf8',
    )
    console.log('Markdown file generated successfully.')
  } catch (err) {
    console.error('Error generating markdown file:', err)
  }
}

function mapBlueprintToTemplateData(blueprint: Blueprint) {
  const route = blueprint.routes.find((route) => route.path === '/acs/systems')
  if (!route) {
    throw new Error('Route not found')
  }
  const endpoint = route.endpoints.find(
    (endpoint) => endpoint.path === '/acs/systems',
  )
  if (!endpoint) {
    throw new Error('Endpoint not found')
  }

  return {
    objectName: 'List Systems',
    objectDescription: 'Get all access control systems',
    methods: [
      {
        methodName: endpoint.title,
        description:
          'Returns a list of all [access control systems](../../../products/access-systems/).',
        swaggerSrc: 'https://connect.getseam.com/openapi.json',
        swaggerPath: endpoint.path,
        swaggerMethod: endpoint.request.preferredMethod.toLowerCase(),
        parameters: endpoint.request.parameters.map((param) => ({
          name: param.name,
          required: param.isRequired,
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

await main()
