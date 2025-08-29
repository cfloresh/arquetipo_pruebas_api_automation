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
  console.log(dataservlet.key1)
  console.log(dataservlet.key2)
  const context = await request.newContext();
  const response = await context.post('http://ww84.yourserver.com/yourServletPath', {
    data: {
      key1: dataservlet.key1,
      key2: dataservlet.key2,
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