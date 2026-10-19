import {expect} from '@playwright/test'
import { CreateLeadPage } from "./createLeadPage";

export class ViewLeadPage extends CreateLeadPage{

async verifyLeadCreation(){
    let firstName = await this.page.locator('[id="viewLead_firstName_sp"]').innerText()
    console.log(firstName)



    //non retry assertion
    expect(firstName).toBe('Megha')

    //retry assertion
    //exacr match
    await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toHaveText('Megha')

    //partial match
    await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toContainText('Megh')
}
}