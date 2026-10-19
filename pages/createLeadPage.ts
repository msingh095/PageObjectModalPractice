import { LeadPage } from "./leadPage";

export class CreateLeadPage extends LeadPage{

    async  enterMandatoryFields(){
        await this.page.locator('#createLeadForm_companyName').fill('TestLeaf')
        await this.page.locator('#createLeadForm_firstName').fill('Megha')
        await this.page.locator('#createLeadForm_lastName').fill('Singh')

    }

    async clickonCreateLeadSubmitButton(){
        await this.page.locator('.smallSubmit').click()
    }
}
