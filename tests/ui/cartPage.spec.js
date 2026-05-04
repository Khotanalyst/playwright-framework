import {test, expect} from '../../utils/fixtures.js';
import users from '../../test-data/users.json' assert { type: 'json' };

test('verify product details in cart', async ({ loginPage, inventoryPage, cartPage, page }) => {
    await loginPage.login(users.validUser.username, users.validUser.password); 
    await inventoryPage.addToCartButton.click();
    await inventoryPage.goToCart();

    await expect(cartPage.productName).toHaveText('Sauce Labs Backpack');
    await expect(cartPage.productPrice).toHaveText('$29.99');
    await expect(cartPage.removeButton).toBeVisible();

})