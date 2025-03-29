const schema_getpost = {
    oneOf: [
      // Skema untuk Create User (POST /api/users)
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "job": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "createdAt": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "job",
          "id",
          "createdAt"
        ]
      },
      
      // Skema untuk Get Single User (GET /api/users/:id)
      {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "email": {
                "type": "string"
              },
              "first_name": {
                "type": "string"
              },
              "last_name": {
                "type": "string"
              },
              "avatar": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "email",
              "first_name",
              "last_name",
              "avatar"
            ]
          },
          "support": {
            "type": "object",
            "properties": {
              "url": {
                "type": "string"
              },
              "text": {
                "type": "string"
              }
            },
            "required": [
              "url",
              "text"
            ]
          }
        },
        "required": [
          "data",
          "support"
        ]
        }
    ]
  };
  export default schema_getpost;