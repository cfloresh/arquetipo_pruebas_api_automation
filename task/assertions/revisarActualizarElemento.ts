import {APIResponse, expect } from "@playwright/test";
import { test } from '@playwright/test';

export class revisarEliminarElementos {




    public async metodoInfoRevisarActualizacion(actualizarResponse: APIResponse): Promise<void> { 
        await test.step(`Revisar metodo get retorno de elemtos`, async () => { 
            console.log(JSON.stringify(await actualizarResponse.json())) 
            const var1 = await actualizarResponse.json()
            expect(actualizarResponse.status()).toBe(200)
        })

    }


}