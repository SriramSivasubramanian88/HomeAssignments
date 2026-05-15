/* Shadow Root use - css or playwright selector. Xpath may not work as expected

Manual Test Case – ServiceNow Service Catalog 
Test Case Title 
Verify placing an order for Apple iPhone 13 Pro from ServiceNow Service Catalog 
Preconditions 
• ServiceNow application is accessible 
 Valid admin credentials are available 
 
 Test Steps 
 1. Launch the ServiceNow application using the given URL. 
 2. Enter User name as admin. 
 3. Enter Password with valid credentials. 
 4. Click on the Log in button. 
 5. Wait for the ServiceNow home page to load successfully. 
 6. Click on the All menu from the left navigation panel. 
 7. Click on Service Catalog from the menu options. 
 8. Switch to the Service Catalog iframe. 
 9. Click on the Mobiles category. 
 10. Select Apple iPhone 13 Pro from the product list. 
 11. Choose Yes for the Lost or Broken iPhone option. 
 12. Enter 99 in the Original phone number field. 
 13. Select Unlimited from the Monthly data allowance dropdown. 
 14. Select Sierra Blue as the color option. 
 15. Select 512 GB as the storage option. 
 16. Click on the Order Now button. 
 17. Verify the confirmation message is displayed. 
 18. Capture a full-page screenshot of the order confirmation page. 
 
 Expected Result 
 
 • The order for Apple iPhone 13 Pro is successfully placed. 
 • Confirmation message is displayed. 
 • Screenshot is captured for proof.
 
 Postconditions 
 • Order request is created successfully in ServiceNow. */

import test, { expect } from "playwright/test";
import serviceNowData from '../../utils/servicenow.json'
import path from 'path'

test.describe('ServiceNow Service Catalog',()=>{
    
        test('Verify placing an order for Apple iPhone 13 Pro from ServiceNow Service Catalog',async({ page })=>{
            await page.goto('https://dev296651.service-now.com/');
            await page.getByRole('textbox', { name: 'User name' }).fill(serviceNowData.user_name);
            await page.getByRole('textbox', { name: 'Password' }).fill(serviceNowData.password);
            await page.getByRole('button', { name: 'Log in' }).click();
            const mainFrame = page.frameLocator(`iframe[name="gsft_main"]`)           
            await expect(mainFrame.getByText('GO FURTHER')).toBeVisible();
            await page.getByRole('menuitem', { name: 'All' }).click();
            await page.locator('.item-icon').filter({ hasText: 'Service Catalog' }).click()
            await mainFrame.getByRole('link', { name: 'Mobiles. Cell phones to meet your business needs.', exact: true }).click();
            const prod=mainFrame.getByRole('link', { name: serviceNowData.product , exact: true });
            await expect(prod).toBeVisible();
            await prod.click();
            await mainFrame.getByText('Yes').click()
            await mainFrame.getByRole('textbox', { name: '   What was the original' }).fill(serviceNowData.originalPhoneNum);
            await mainFrame.locator(`select[name="IO:33494b069747011021983d1e6253af45"]`).selectOption({ value: serviceNowData.MonthlyAllowance})
            await mainFrame.getByText(serviceNowData.color).click();
            await mainFrame.locator('label').filter({ hasText: new RegExp(serviceNowData.storage) }).last().click();
            const orderNowBtn=mainFrame.getByRole('button', { name: 'Order Now' });
            await expect(orderNowBtn).toBeEnabled();
            await orderNowBtn.click();
            await page.pause();
            await expect(mainFrame.getByText('Thank you, your request has')).toBeVisible();
            const screenshotFileName=`order.png`;
            console.log(`Screenshot saved to ${screenshotFileName}`);
            
            await page.screenshot({ 
                path: `utils/${screenshotFileName}`,
                fullPage: true
            })
            
    })
    
    
 })

 
