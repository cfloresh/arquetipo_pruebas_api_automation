import { test, expect, request } from '@playwright/test';


test('Prueba metodo GET request a servlet',{ tag: ['@regresion', '@ServiciosServlet', '@ServiciosServlerGet'] },async () => {
  const context = await request.newContext();
  const response = await context.get('http://ww84.yourserver.com/yourServletPath');
  expect(response.status()).toBe(200);
  console.log(JSON.stringify(await response.text()))
});



const xlsx = require('xlsx')
// leer el archivo excel
const filePath = './data/DataDriven.xlsx'
const workbook = xlsx.readFile(filePath)
const sheetName = 'test3';
const worksheet = workbook.Sheets[sheetName];
const records = xlsx.utils.sheet_to_json(worksheet);
// lee el reglon posterior al encabezado
const testServlet = records[0];

test('Prueba metodo POST request a servlet',{ tag: ['@regresion', '@ServiciosServlet','@ServiciosServlerPost'] }, async () => {
  console.log(testServlet.key1)
  console.log(testServlet.key2)
  const context = await request.newContext();
  const response = await context.post('http://ww84.yourserver.com/yourServletPath', {
    data: {
      key1: testServlet.key1,
      key2: testServlet.key2,
      // agrega los datos requeridos para tu solicitud POST
    },
    headers: {
      'Content-Type': 'application/json', // asegura que el servidor trata la solicitud como JSON
      // agrega otros encabezados si son necesarios
    }
  });
  expect(response.status()).toBe(200);
  console.log(JSON.stringify(await response.text()));
});