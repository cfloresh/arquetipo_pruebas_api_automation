// userRequestBody.ts o el archivo correspondiente
import { lecturaExcelData } from './lecturaDatos' 

export async function initializeRequestBodyCreate() {
  const createUser = await lecturaExcelData('test1', 2)
  
  return {
  id: parseInt(createUser.id),
  username: createUser.username,
  firstName: createUser.firstName,
  lastName: createUser.lastName,
  email: createUser.email,
  password: createUser.password,
  phone: createUser.phone,
  userStatus: parseInt(createUser.userStatus)
}
}