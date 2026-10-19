import{test} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { ViewLeadPage } from '../pages/viewLeadPage'    

test('Create Lead uisng POM', async({page})=>{

    //object creation for login page
// let lp=new LoginPage(page)
// await lp.loadUrl("https://leaftaps.com/opentaps/control/main")
// await lp.loginCredentials("democsr2","crmsfa")
// await lp.clickonLogin()

//create objec t of view lead page
let vlp=new ViewLeadPage(page)
await vlp.loadUrl("https://leaftaps.com/opentaps/control/main")
await vlp.loginCredentials("democsr2","crmsfa")
await vlp.clickonLogin()
await vlp.clickonCRM()
await vlp.clickonLeads()
await vlp.clickOnCreateLeadButton()
await vlp.enterMandatoryFields()
await vlp.clickonCreateLeadSubmitButton()
await vlp.verifyLeadCreation()

})