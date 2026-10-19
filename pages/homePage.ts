import { WelcomePage } from "./WelcomePage"

export class HomePage extends WelcomePage{


    async clickonLeads(){
        await this.page.locator('//a[text()="Leads"]').click()
    }
}