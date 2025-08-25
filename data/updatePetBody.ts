const xlsx = require('xlsx')
// leer el archivo excel
const filePath = './data/DataDriven.xlsx'
const workbook = xlsx.readFile(filePath)
const sheetName = 'test2';
const worksheet = workbook.Sheets[sheetName];
const records = xlsx.utils.sheet_to_json(worksheet);

// lee el reglon posterior al encabezado
const updateUser = records[0];


// userRequestBody.js
export const bodyRequestUpdate = {
    "id": parseInt(updateUser.id),
    "category": {
      "id": parseInt(updateUser.id_category),
      "name": "CatsDogs"
    },
    "name": updateUser.name,
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": parseInt(updateUser.tag_id),
        "name": updateUser.tag_name
      }
    ],
    "status": updateUser.status
  };
