import test from "ava";
import extractPropertiesFromEndpoint from "../src/extract-properties-from-endpoint";

test("extractPropertiesFromEndpoint from /accces_codes/create should return expected properties", (t) => {
  const sampleJsonData = {
    "openapi": "3.0.0",
    "info": {
      "title": "Seam Connect",
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "https://connect.getseam.com"
      }
    ],
    "tags": [],
    "paths": {
      "/access_codes/create": {
        "post": {
          "x-fern-sdk-group-name": [
            "access_codes"
          ],
          "x-fern-sdk-method-name": "create",
          "x-fern-sdk-return-value": "access_code",
          "summary": "/access_codes/create",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "action_attempt": {
                        "$ref": "#/components/schemas/action_attempt"
                      },
                      "access_code": {
                        "$ref": "#/components/schemas/access_code"
                      },
                      "ok": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "action_attempt",
                      "access_code",
                      "ok"
                    ]
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            }
          },
          "security": [
            {
              "seam_workspace": [],
              "access_token": []
            },
            {
              "seam_client_session_token": []
            },
            {
              "client_session_token": []
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "device_id": {
                      "type": "string",
                      "format": "uuid"
                    },
                    "name": {
                      "type": "string"
                    },
                    "starts_at": {
                      "type": "string"
                    },
                    "ends_at": {
                      "type": "string"
                    },
                    "code": {
                      "type": "string",
                      "minLength": 4,
                      "maxLength": 8,
                      "pattern": "^\\d+$"
                    },
                    "sync": {
                      "default": false,
                      "type": "boolean"
                    },
                    "attempt_for_offline_device": {
                      "default": true,
                      "type": "boolean"
                    },
                    "common_code_key": {
                      "type": "string"
                    },
                    "prefer_native_scheduling": {
                      "type": "boolean"
                    },
                    "use_backup_access_code_pool": {
                      "type": "boolean"
                    },
                    "allow_external_modification": {
                      "type": "boolean"
                    },
                    "is_external_modification_allowed": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "device_id"
                  ]
                }
              }
            }
          },
          "tags": [
            "/access_codes"
          ],
          "operationId": "accessCodesCreatePost"
        }
      }
    }
  }

  const endpoint = '/access_codes/create';

  const properties = extractPropertiesFromEndpoint(sampleJsonData, endpoint);

  const expectedProperties = {
    device_id: {
      "type": "string",
      "format": "uuid"
    },
    name: {
      "type": "string"
    },
    starts_at: {
      "type": "string"
    },
    ends_at: {
      "type": "string"
    },
    code: {
      "type": "string",
      "minLength": 4,
      "maxLength": 8,
      "pattern": "^\\d+$"
    },
    sync: {
      "default": false,
      "type": "boolean"
    },
    attempt_for_offline_device: {
      "default": true,
      "type": "boolean"
    },
    common_code_key: {
      "type": "string"
    },
    prefer_native_scheduling: {
      "type": "boolean"
    },
    use_backup_access_code_pool: {
      "type": "boolean"
    },
    allow_external_modification: {
      "type": "boolean"
    },
    is_external_modification_allowed: {
      "type": "boolean"
    }
  };

  t.deepEqual(properties, expectedProperties);
})

//* return only POST

test("extractPropertiesFromEndpoint from /access_codes/create_multiple should return expected properties", (t) => {
  const sampleJsonData = {
    "openapi": "3.0.0",
    "info": {
      "title": "Seam Connect",
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "https://connect.getseam.com"
      }
    ],
    "tags": [],
    "paths": {
      "/access_codes/create_multiple": {
        "put": {
          "x-fern-ignore": true,
          "summary": "/access_codes/create_multiple",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "access_codes": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/access_code"
                        }
                      },
                      "ok": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "access_codes",
                      "ok"
                    ]
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            }
          },
          "security": [
            {
              "seam_workspace": [],
              "access_token": []
            },
            {
              "seam_client_session_token": []
            },
            {
              "client_session_token": []
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "device_ids": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "format": "uuid"
                      }
                    },
                    "behavior_when_code_cannot_be_shared": {
                      "default": "throw",
                      "type": "string",
                      "enum": [
                        "throw",
                        "create_random_code"
                      ]
                    },
                    "name": {
                      "type": "string"
                    },
                    "starts_at": {
                      "type": "string"
                    },
                    "ends_at": {
                      "type": "string"
                    },
                    "code": {
                      "type": "string",
                      "minLength": 4,
                      "maxLength": 8,
                      "pattern": "^\\d+$"
                    },
                    "attempt_for_offline_device": {
                      "default": true,
                      "type": "boolean"
                    },
                    "prefer_native_scheduling": {
                      "type": "boolean"
                    },
                    "use_backup_access_code_pool": {
                      "type": "boolean"
                    },
                    "allow_external_modification": {
                      "type": "boolean"
                    },
                    "is_external_modification_allowed": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "device_ids"
                  ]
                }
              }
            }
          },
          "tags": [
            "/access_codes"
          ],
          "operationId": "accessCodesCreateMultiplePut"
        },
        "post": {
          "x-fern-sdk-group-name": [
            "access_codes"
          ],
          "x-fern-sdk-method-name": "create_multiple",
          "x-fern-sdk-return-value": "access_codes",
          "summary": "/access_codes/create_multiple",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "access_codes": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/access_code"
                        }
                      },
                      "ok": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "access_codes",
                      "ok"
                    ]
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            }
          },
          "security": [
            {
              "seam_workspace": [],
              "access_token": []
            },
            {
              "seam_client_session_token": []
            },
            {
              "client_session_token": []
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "device_ids": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "format": "uuid"
                      }
                    },
                    "behavior_when_code_cannot_be_shared": {
                      "default": "throw",
                      "type": "string",
                      "enum": [
                        "throw",
                        "create_random_code"
                      ]
                    },
                    "name": {
                      "type": "string"
                    },
                    "starts_at": {
                      "type": "string"
                    },
                    "ends_at": {
                      "type": "string"
                    },
                    "code": {
                      "type": "string",
                      "minLength": 4,
                      "maxLength": 8,
                      "pattern": "^\\d+$"
                    },
                    "attempt_for_offline_device": {
                      "default": true,
                      "type": "boolean"
                    },
                    "prefer_native_scheduling": {
                      "type": "boolean"
                    },
                    "use_backup_access_code_pool": {
                      "type": "boolean"
                    },
                    "allow_external_modification": {
                      "type": "boolean"
                    },
                    "is_external_modification_allowed": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "device_ids"
                  ]
                }
              }
            }
          },
          "tags": [
            "/access_codes"
          ],
          "operationId": "accessCodesCreateMultiplePost"
        }
      }
    }
  }

  const endpoint = '/access_codes/create_multiple';

  const properties = extractPropertiesFromEndpoint(sampleJsonData, endpoint);

  const expectedProperties = {
    device_ids: {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uuid"
      }
    },
    behavior_when_code_cannot_be_shared: {
      "default": "throw",
      "type": "string",
      "enum": [
        "throw",
        "create_random_code"
      ]
    },
    name: {
      "type": "string"
    },
    starts_at: {
      "type": "string"
    },
    ends_at: {
      "type": "string"
    },
    code: {
      "type": "string",
      "minLength": 4,
      "maxLength": 8,
      "pattern": "^\\d+$"
    },
    attempt_for_offline_device: {
      "default": true,
      "type": "boolean"
    },
    prefer_native_scheduling: {
      "type": "boolean"
    },
    use_backup_access_code_pool: {
      "type": "boolean"
    },
    allow_external_modification: {
      "type": "boolean"
    },
    is_external_modification_allowed: {
      "type": "boolean"
    }
  };

  t.deepEqual(properties, expectedProperties);
})
