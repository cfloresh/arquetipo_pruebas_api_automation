import { APIRequestContext, APIResponse } from "@playwright/test";
import { test } from '@playwright/test';

export class deleteElement {
    private request

    constructor(request: APIRequestContext) {
        this.request = request
    }


    public async metodoInfo(): Promise<APIResponse> {
        return await test.step(`Eliminar registro`, async () => { 
            return await this.request.delete('/v2/store/order/4', { 
                ignoreHTTPSErrors: true  
            })
        })

    }


}