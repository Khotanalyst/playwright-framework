// pages/CartPage.js
export class CartPage {
  constructor(page) {
    this.page = page;
    
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.productPrice = page.locator('[data-test="inventory-item-price"]');
    this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }
}