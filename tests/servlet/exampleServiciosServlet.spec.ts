import { test, expect, request } from '@playwright/test';


test('Prueba metodo GET request a servlet',{ tag: ['@regresion', '@ServiciosServlet', '@ServiciosServlerGet'] },async () => {
  const context = await request.newContext();
  const response = await context.get('http://ww84.yourserver.com/yourServletPath');
  expect(response.status()).toBe(200);
  console.log(JSON.stringify(await response.text()))
});




test('Prueba metodo POST request a servlet',{ tag: ['@regresion', '@ServiciosServlet','@ServiciosServlerPost'] }, async () => {
  const context = await request.newContext();
  const response = await context.post('http://ww84.yourserver.com/yourServletPath', {
    data: {
      key1: 'value1',
      key2: 'value2',
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