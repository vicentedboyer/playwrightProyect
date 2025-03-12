import { expect } from '@playwright/test';

export class OrderPage {
  constructor(page) {
    this.page = page

    this.item_botton_one = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    this.item_botton_two = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
    this.item_botton_three = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    this.shipping_card_botton = page.locator('[data-test="shopping-cart-link"]')
    this.checkout_botton = page.locator('[data-test="checkout"]')
    this.first_name_shipping_input = page.locator('[data-test="firstName"]')
    this.last_name_shipping_input = page.locator('[data-test="lastName"]')
    this.zip_code_chipping_input = page.locator('[data-test="postalCode"]')
    this.continue_information_botton = page.locator('[data-test="continue"]')
    this.finish_botton = page.locator('[data-test="finish"]')
    this.confirm_message_shipping = page.locator('[data-test="title"]')
    this.logo_confirm = page.locator('[data-test="checkout-complete-container"]')
  }

  async addToCard() {
    await this.item_botton_one.click()
    await this.item_botton_two.click()
    await this.item_botton_three.click()
    await this.shipping_card_botton.click()
    await this.checkout_botton.click()
  }

  async addShippingInf(fistName ,lastName , zipCode) {
    await this.first_name_shipping_input.fill(fistName)
    await this.last_name_shipping_input.fill(lastName)
    await this.zip_code_chipping_input.fill(zipCode)
    await this.continue_information_botton.click()
    await this.finish_botton.click()

  }

  async confirmShipping() {
    await expect(this.confirm_message_shipping).toBeVisible()
  }

}