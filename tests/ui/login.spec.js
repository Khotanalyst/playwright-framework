import { test, expect } from '../../utils/fixtures';
// import { LoginPage } from '../../pages/LoginPage';
import users from '../../test-data/users.json';


// let loginPage;

// test.beforeEach(async({page})=>{
//     loginPage = new LoginPage(page);
//     await loginPage.goto();
// })

test('valid user login', async({loginPage,page})=>{
    
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})

test('invalid user login', async({loginPage,page})=>{
    
    await loginPage.login(users.inValidUser.username, users.inValidUser.password);
    await expect(loginPage.error).toBeVisible();

})