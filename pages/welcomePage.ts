import { LoginPage } from "./loginPage";

export class WelcomePage extends LoginPage{

    async clickonCRM(){

        await this.page.locator('text=CRM/SFA').click()
    }


    async clickonLogout(){
        await this.page.locator('.decorativeSubmit').click()
    }
}