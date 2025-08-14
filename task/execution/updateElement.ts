import { APIRequest, APIRequestContext, APIResponse } from "@playwright/test";
import { test } from '@playwright/test';

export class updatePets {
    private request

    constructor(request: APIRequestContext) {
        this.request = request
    }

    public async metodoInfoUpdate(bodyRequest: any): Promise<APIResponse> {
        return await test.step(`actualizar mascota`, async () => { 
            return await this.request.post('/v2/pet', { 
                data: bodyRequest,
                ignoreHTTPSErrors: true  
            })
        })
    }


}