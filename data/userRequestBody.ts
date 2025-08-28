// userRequestBody.ts o el archivo correspondiente
import { lecturaExcelData } from './lecturaDatos' 

export async function initializeRequestBodyCreate() {
    const createUser = await lecturaExcelData('test1', 2)
     const emailValue = typeof createUser[5] === 'object' ? createUser[5].text : createUser[5] /*transforma el obgeto en texto */

    return {
  id: parseInt(createUser[1]),
  username: createUser[2],
  firstName: createUser[3],
  lastName: createUser[4],
  email: emailValue,
  password: createUser[6],
  phone: createUser[7],
  userStatus: parseInt(createUser[8])
}
}