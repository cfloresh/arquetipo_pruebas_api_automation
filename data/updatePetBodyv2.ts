// userRequestBody.ts o el archivo correspondiente
import { lecturaExcelData } from './lecturaDatos' 

export async function initializeRequestBody() {
    const updateUser = await lecturaExcelData('test2', 2)

    return {
        "id": parseInt(updateUser[1]),
        "category": {
            "id": parseInt(updateUser[2]),
            "name": updateUser[3]
        },
        "name": updateUser[4],
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": parseInt(updateUser[5]),
                "name": updateUser[6]
            }
        ],
        "status": updateUser[7]
    };
}