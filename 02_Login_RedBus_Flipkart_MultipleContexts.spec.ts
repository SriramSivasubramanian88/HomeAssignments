/* Home Assignment <2.2> 
Red Bus and Flipkart in Edge and Firefox Browser Instances (Week2.Day2) 
Learning Objective: 
 Learn how to automate basic navigation to two different websites (Red Bus and Flipkart) 
in two separate browser instances (Edge and Firefox) using Playwright. 
Expected Completion Time: 
 Best Case: 15 minutes 
 Average Case: 20 minutes 
Assignment Details: 
Task: 
Your task is to launch two separate browser instances using Playwright: 
1. Load Red Bus in an Edge browser instance and verify the page title and URL. 
2. Load Flipkart in a Firefox browser instance and verify the page title and URL. 
Preconditions: 
1. Use Playwright to launch Edge and Firefox. 
2. Create two separate browser instances. 
3. Use the following URLs: 
o Red Bus: https://www.redbus.in 
o Flipkart: https://www.flipkart.com 
Requirements: 
 Red Bus (Edge): 
o Load the home page and print the page title and current URL. 
 Flipkart (Firefox): 
o Load the home page and print the page title and current URL. 
Hints: 
 Use page.title() to retrieve the page title. 
 Use page.url() to retrieve the current page URL. 
Expected Outcome: 
 Upon completion, you should be able to navigate two websites in two separate browser 
instances (Edge and Firefox), retrieve page information, and print the page titles and 
URLs.  */

import test, {chromium, firefox} from "@playwright/test";

test('02_Login_RedBus_Flipkart_MultipleContexts', async()=>{
    const edgebrowser=await chromium.launch({channel: 'msedge', headless: false});
    const edgecontext=await edgebrowser.newContext();
    const edgepage=await edgecontext.newPage();
    await edgepage.goto('https://www.redbus.in/');
    console.log(await edgepage.title());
    console.log(edgepage.url());

    const firefoxbrowser=await firefox.launch({headless:false});
    const firefoxcontext=await firefoxbrowser.newContext();
    const firefoxpage=await firefoxcontext.newPage();
    await firefoxpage.goto('https://www.flipkart.com/');
    console.log(await firefoxpage.title());
    console.log(firefoxpage.url());
})