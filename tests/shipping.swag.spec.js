import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage')
const { OrderPage } = require('../pages/orderPage')
import dotenv from 'dotenv'
dotenv.config()

test('Test de proceso de orden de compra completo', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const orderPage = new OrderPage(page)

    await loginPage.login(process.env.USER, process.env.PASSWORD)
    await orderPage.addToCard()
    await orderPage.addShippingInf(process.env.FIST_NAME, process.env.LAST_NAME, process.env.ZIP_CODE)
    await orderPage.confirmShipping();
    await page.close()

});




