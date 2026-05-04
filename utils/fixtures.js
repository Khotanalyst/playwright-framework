import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

export const test=base.extend({

    loginPage:async({page},use)=>{
        const loginPage= new LoginPage(page);
        await loginPage.goto()
        await use(loginPage);
    }
,
    inventoryPage:async({loginPage,page},use)=>{
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    }
,
    cartPage:async({loginPage,page},use)=>{
        const cartPage= new CartPage(page);
        await use(cartPage)
    }
})
    

    export {expect} from '@playwright/test';
