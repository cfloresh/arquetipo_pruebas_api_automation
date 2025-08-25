const xlsx = require('xlsx')
// leer el archivo excel
const filePath = './data/DataDriven.xlsx'
const workbook = xlsx.readFile(filePath)
const sheetName = 'test1';
const worksheet = workbook.Sheets[sheetName];
const records = xlsx.utils.sheet_to_json(worksheet);
// lee el reglon posterior al encabezado
const user = records[0];

// userRequestBody.js
export const bodyRequest = {
  id: parseInt(user.id),
  username: user.username,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  password: user.password,
  phone: user.phone,
  userStatus: parseInt(user.userStatus)
};
