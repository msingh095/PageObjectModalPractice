import{test} from '@playwright/test'
import{LeadPage_sf} from '../pages/leadPage_sf'


test('Salesforce Lead Creation Using POM', async({page})=>{

let lp = new LeadPage_sf(page)
await lp.loadUrl('https://login.salesforce.com/')
await lp.loginCredentials('singh2megha.ms.573de96b24ec@agentforce.com','Megha@95!!')
await lp.clickonLogin() 
await lp.clickOnAppLauncher()
await lp.clickOnViewAll()
await lp.searchForLeads()
await lp.navigateToLeads()
await lp.clickOnNew()
await lp.enterMandatoryFields()
await lp.clickOnCreateLead()
await lp.verifyLeadCreation()
})