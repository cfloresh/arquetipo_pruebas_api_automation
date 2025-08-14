import { APIRequest, APIRequestContext, APIResponse } from "@playwright/test";
import { test } from '@playwright/test';

export class clasListarElementos {
    private request

    constructor(request: APIRequestContext) {
        this.request = request
    }


    public async metodoInfo(): Promise<APIResponse> {
        return await test.step(`listar elementos`, async () => { 
            return await this.request.get('/v2/store/inventory', { 
                ignoreHTTPSErrors: true  
            })
        })
    }

}