export class LoginPage{

   constructor(page){

    this.page=page;

    //Locators
    this.usernameInput=  page.locator('#user-name')
    this.passwordInput=  page.getByRole('textbox', { name: 'Password' })
    this.loginButton=  page.getByRole('button', { name: 'Login' })
    this.error = page.locator('[data-test="error"]')
   }

    async goto(){
        await this.page.goto('/')
    }

    async login(username,password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    


    }




