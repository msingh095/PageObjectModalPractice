# PageObjectModalPractice
contains code written in POM framework

1. Salesforce Lead Creation Using POM, Playwright with TypeScript
   **Implemented the Salesforce Lead Creation flow using Page Object Model (POM) in Playwright with TypeScript.**
   
 Following are the Pages in Salesforce application automation:

 * loginPage_sf.ts --> load url -> enter login credentials ->click on login.
 * homePage_sf.ts --> Click App Launcher → View All → search for Leads → navigate to Leads.
 * leadPage_sf.ts --> Click New → enter mandatory fields → create Lead → verified Lead using assertions.

   Test folder contains **createLeadSalesforce.spec.ts** file.

2. Classroom session code
   **Implemented "/leaftaps.com" Lead Creation flow using Page Object Model (POM) in Playwright with TypeScript.**
   
 Following are the Pages in Leaftaps application automation:
 
 * loginPage.ts --> load url -> enter login credentials ->click on login
 * welcomePage.ts --> click CRM -> click Logout ->
 * homePage.ts --> click leads
 * createLeadPage.ts --> click On Create Lead Button
 * leadPage.ts --> enter Mandatory Fields -> click on Submit
 * viewLeadPAge --> verify firstName

 Test folder contains **createLead.spec.ts** file.
