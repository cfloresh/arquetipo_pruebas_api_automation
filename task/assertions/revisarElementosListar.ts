import { APIRequest, APIRequestContext, APIResponse, expect } from "@playwright/test";
import { test } from '@playwright/test';

export class revisarListaElementos {

    public async metodoInfolistar(listaResponse: APIResponse): Promise<void> { /*AL SER UNA ASSERCION NO RETORNA NADA */
        await test.step(`Revisar metodo get retorno de elemtos`, async () => {
            console.log(JSON.stringify(await listaResponse.json()))
            const var1 = await listaResponse.json()
            expect(listaResponse.status()).toBe(200)
        })

    }


}