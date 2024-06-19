export interface Property {
  name: string
  type: string
  required: boolean
}

export interface Method {
  methodName: string
  parameters: Property[]
  responseProperties: Property[]
  sampleRequest: string
  sampleResponse: string
}

export interface BlueprintEndpoint {
  objectName: string
  properties: Property[]
  methods: Method[]
}
