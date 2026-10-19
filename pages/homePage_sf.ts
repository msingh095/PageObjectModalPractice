//click App Launcher → View All → search for Leads → navigate to Leads.

import { LoginPage_sf } from "./loginPage_sf";

export class HomePage_sf extends LoginPage_sf{

    async clickOnAppLauncher(){

        await this.page.locator('.slds-icon-waffle').click()
    }

    async clickOnViewAll(){
        await this.page.locator('button[aria-label="View All Applications"]').click()

    }

    async searchForLeads(){
        await this.page.locator('//input[@placeholder="Search apps or items..."]').fill('Leads')
    }

    async navigateToLeads(){
        await this.page.locator('//mark[text()="Leads"]').click()
    }
}