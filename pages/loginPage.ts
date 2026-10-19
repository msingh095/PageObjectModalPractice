/* loadurl()
enter the username
enter the password
click on login
 */

import { chromium,Page,Browser } from "@playwright/test"

  export class LoginPage{

  //global  property

   page:Page


   constructor(tpage:Page){

    this.page=tpage
    
    }


   async loadUrl(url:string){

    await this.page.goto(url)

    //from playwright wrapper
    //await this.loadApplication(url)

   }
  
  
  
   async loginCredentials(username:string,password:string){

    await this.page.locator('#username').fill(username)
    await this.page.locator('#password').fill(password)

    // // await this.clearAndFill('#username',username)
    // // await this.clearAndFill('#password',password)


    // await this.clearAndFill(selectors.username,username)
    // await this.clearAndFill(selectors.password,password)


    }


   async clickonLogin(){

    await this.page.locator('.decorativeSubmit').click()
    //await this.click('.decorativeSubmit')
    // await this.click(selectors.loginButton)


    }

    // async closeBrowser(){

    //     await this.page.close()
    //     //await this.browser.close()
    // }

}