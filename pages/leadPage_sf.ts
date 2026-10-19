//Click New → enter mandatory fields → create Lead → verify Lead using assertions.
import{expect} from '@playwright/test'
import { HomePage_sf } from "./homePage_sf";



export class LeadPage_sf extends HomePage_sf{

    async clickOnNew(){
        await this.page.getByRole('button', { name: 'New' }).click()

    }

    async enterMandatoryFields(){
        await this.page.locator('//input[@placeholder="Last Name"]').fill('Singh')
        await this.page.locator('//input[@name="Company"]').fill('TestLeaf')
    }

    async clickOnCreateLead(){
        await this.page.locator("button[name='SaveEdit']").click()
    }

    async verifyLeadCreation(){

        // non retry assertion
        let lastName = await this.page.locator('//lightning-formatted-name[text()="Singh"]').innerText()
        let companyName = await this.page.locator('//lightning-formatted-text[text()="TestLeaf"]').innerText()
        expect(lastName).toBe('Singh')
        expect(companyName).toBe('TestLeaf')

        //retry ASSERTION
        await expect(this.page.locator('lightning-formatted-name:has-text("Singh")')).toHaveText('Singh')


    }

}