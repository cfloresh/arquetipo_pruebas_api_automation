import { test } from '@playwright/test'
import { CreateNewUser } from '../../task/execution/createUser'
import { clasListarElementos } from '../../task/execution/listarElementos'
import { RevisarUsuarioCreado } from '../../task/assertions/revisarUsuarioCreado'
import { revisarListaElementos } from '../../task/assertions/revisarElementosListar'
import { deleteElement } from '../../task/execution/eliminarMascota'
import { updatePets } from '../../task/execution/updateElement'
import { revisarEliminarElementos } from '../../task/assertions/revisarElminarElemento'
import { initializeRequestBodyCreate } from '../../data/userRequestBody'
import { initializeRequestBody } from '../../data/updatePetBodyv2'




test('Crear Usuaruio, servicio rest', { tag: ['@regresion', '@TC-0001'] }, async ({ request }) => {
  const bodyRequestCreate = await initializeRequestBodyCreate()
  console.log("body del request createee")
  console.log(bodyRequestCreate)
  const createNewUserInstance = new CreateNewUser(request)
  const newUserResponse = await createNewUserInstance.metodoInfo(bodyRequestCreate)
  console.log("Response del servicio")
  console.log(JSON.stringify(await newUserResponse.json()))
  const revisarNuevoUsuarioInstance = new RevisarUsuarioCreado()
  await revisarNuevoUsuarioInstance.metodoInfo(newUserResponse)
})


/*metodo get */
test('Listar inventario de tienda de mascota', { tag: ['@regresion', '@listarElementoGet'] }, async ({ request }) => {
  const listarElementosIntance = new clasListarElementos(request)
  const listaResponse = await listarElementosIntance.metodoInfo()
  console.log(JSON.stringify(await listaResponse.json()))
  const revisarElementosListarInstance = new revisarListaElementos()
  await revisarElementosListarInstance.metodoInfolistar(listaResponse)
})


/*metodo delete*/
test('Eliminar mascota', { tag: ['@regresion', '@eliminarElemento'] }, async ({ request }) => {
  const eliminarElementosIntance = new deleteElement(request)
  const eleminarResponse = await eliminarElementosIntance.metodoInfo()
  console.log(JSON.stringify(await eleminarResponse.json()))
  const revisarEliminarInstance = new revisarEliminarElementos()
  await revisarEliminarInstance.metodoInfoRevisarEliminar(eleminarResponse)
})


/*metodo put*/
test('Actualizar elemento mascota', { tag: ['@regresion', '@actualizarElemento'] }, async ({ request }) => {
  // Llama a la función para obtener el cuerpo de la solicitud
  const bodyRequestUpdate = await initializeRequestBody()
  console.log("body del request update")
  console.log(bodyRequestUpdate)
  const actualizarElementosIntance = new updatePets(request)
  const actualizarResponse = await actualizarElementosIntance.metodoInfoUpdate(bodyRequestUpdate)
  console.log(JSON.stringify(await actualizarResponse.json()))
  const revisarElementUpdateIntance = new revisarEliminarElementos()
  await revisarElementUpdateIntance.metodoInfoRevisarEliminar(actualizarResponse)
})
