import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page

        this.user_input = page.locator('[data-test="username"]')
        this.password_input = page.locator('[data-test="password"]')
        this.login_botton = page.locator('[data-test="login-button"]')
    }

    async login(user, password) {
        await this.page.goto('/')
        await this.user_input.fill(user)
        await this.password_input.fill(password)
        await this.login_botton.click()
    }
}