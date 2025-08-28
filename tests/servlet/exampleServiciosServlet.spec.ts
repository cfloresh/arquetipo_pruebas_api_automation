import { test, expect, request } from '@playwright/test'
import { lecturaExcelData } from '../../data/lecturaDatos' 


test('Prueba metodo GET request a servlet',{ tag: ['@regresion', '@ServiciosServlet', '@ServiciosServlerGet'] },async () => {
  const context = await request.newContext();
  const response = await context.get('http://ww84.yourserver.com/yourServletPath');
  expect(response.status()).toBe(200);
  console.log(JSON.stringify(await response.text()))
});



test('Prueba metodo POST request a servlet',{ tag: ['@regresion', '@ServiciosServlet','@ServiciosServlerPost'] }, async () => {
  const dataservlet = await lecturaExcelData('test3', 2)
  console.log(dataservlet[1])
  console.log(dataservlet[2])
  const context = await request.newContext();
  const response = await context.post('http://ww84.yourserver.com/yourServletPath', {
    data: {
      key1: dataservlet[1],
      key2: dataservlet[1],
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