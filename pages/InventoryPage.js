// pages/InventoryPage.js
export class InventoryPage {
  
  constructor(page) {
    this.page = page;
    
    this.inventoryItems = page.locator('.inventory_item');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productNames = page.locator('[data-test="inventory-item-name"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

    async sortBy(option){
      await this.sortDropdown.selectOption(option);
    }

    async getProductNames(){
      return await this.productNames.allTextContents();
    }

    async goToCart() {
    await this.cartIcon.click();
}

}