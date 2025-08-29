// userRequestBody.ts o el archivo correspondiente
import { lecturaExcelData } from './lecturaDatos' 

export async function initializeRequestBody() {
    const updateUser = await lecturaExcelData('test2', 2)

    return {
        "id": parseInt(updateUser.id),
        "category": {
            "id": parseInt(updateUser.id_category),
            "name": updateUser.name_category
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
}