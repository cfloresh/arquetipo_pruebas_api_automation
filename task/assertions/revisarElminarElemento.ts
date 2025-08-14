import {APIResponse, expect } from "@playwright/test";
import { test } from '@playwright/test';

export class revisarEliminarElementos {




    public async metodoInfoRevisarEliminar(eleminarResponse: APIResponse): Promise<void> { 
        await test.step(`Revisar metodo delete`, async () => { 
            console.log(JSON.stringify(await eleminarResponse.json())) 
            const var1 = await eleminarResponse.json()
            expect(eleminarResponse.status()).toBe(200)
        })

    }


}