import test, {chromium} from "@playwright/test";

/*  
 
 
 
 
Home Assignment <1>: Log in to Salesforce 
 
Learning Objective: 
Learn how to log in to Salesforce using Playwright with TypeScript. 
 
Expected Completion Time: 
Best Case: 10 minutes 
Average Case: 15 minutes 
 
Assignment Details: 
Your task is to print the title and url of a web page using Playwright. 
 
Precondition: - Launch Chromium in non-headless mode - Create a new browser context. - Open a new page within the browser context. - Load the url https://login.salesforce.com/ - Use your Salesforce credentials that you’ve created 
 
Requirements: - Enter the username. - Enter the password. - Click the Login button. - Wait for 10 seconds  - Print the page title and the current url of the page - Close the browser 
 
Expected Outcome: 
Upon completion, you should be able to: - Successfully login to the application followed by printing the current URL and page title.  */
test('01_Login_Salesforce', async({ })=>{
    const browser=await chromium.launch({channel:'chrome', headless: false});
    const context=await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://login.salesforce.com/');
    await page.fill(`//input[@id='username']`,'dilipkumar.rajendran@testleaf.com')
    await page.fill(`//input[@id='password']`,'TestLeaf@2025') 
    await page.click(`//input[@id='Login']`);
    await page.waitForTimeout(10000)
    console.log(await page.title());
    console.log(page.url());
    await browser.close();
})  