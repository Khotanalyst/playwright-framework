import { test, expect } from '../../utils/fixtures.js';
import users from '../../test-data/users.json' assert { type: 'json' };

test('6 products visible', async ({ loginPage, inventoryPage, page }) => {
  await loginPage.login(users.validUser.username, users.validUser.password);
  
  await expect(inventoryPage.inventoryItems).toHaveCount(6);
  await inventoryPage.sortBy('za');

  const names= await inventoryPage.getProductNames();
const sorted = [...names].sort().reverse()
expect(names).toEqual(sorted);



});

test('add product to cart', async ({ loginPage, inventoryPage, page }) => {
  await loginPage.login(users.validUser.username, users.validUser.password);
  
  await inventoryPage.addToCartButton.click();
  
  await expect(inventoryPage.cartBadge).toHaveText('1');
});

