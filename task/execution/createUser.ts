import { APIRequestContext, APIResponse } from "@playwright/test";
import { test } from '@playwright/test';

export class CreateNewUser {
    private request

    constructor(request: APIRequestContext) {
        this.request = request
    }

    public async metodoInfo(bodyRequest: any): Promise<APIResponse> {
        return await test.step(`Crear nuevo  usuario`, async () => { 
            return await this.request.post('/v2/user', { 
                data: bodyRequest,
                ignoreHTTPSErrors: true  
            })
        })
    }


}