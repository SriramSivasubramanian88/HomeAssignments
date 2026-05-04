import test,{ expect, Page } from "@playwright/test";

test('01.Create Lead',async({ page })=>{
    const salutation='Mr.';
    const lastName='Rajendran';
    loginSalesForce(page, salutation, lastName, 'Sales');
    await page.click(`(//mark[text()='Sales'])[2]`);
    await page.getByRole('button', { name: 'Leads List' }).click();
    await page.getByRole('menuitem', { name: 'New Lead' }).click();
    await page.getByRole('combobox', { name: 'Salutation' }).click();
    await page.getByRole('option', { name: `${salutation}`}).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    await page.getByRole('textbox', { name: 'Company' }).fill('TestLeaf');
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await expect(page.getByText(`Lead "${salutation} ${lastName}" was created`)).toBeVisible()

});

test('02. Edit Lead', async({ page })=>{
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.getByRole('textbox', { name: 'Username' }).fill('demoCSR2');
    await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.pause();
    await page.locator('.crmsfa > a').click();
    await page.getByRole('link',{ name: 'Leads'}).click();
    await page.getByRole('link',{ name: 'Create Lead'}).click();
    await page.fill('#createLeadForm_companyName','TestLeaf');
    await page.fill('#createLeadForm_firstName','Sriram');
    await page.fill('#createLeadForm_lastName','Sivasubramanian');z

    await page.getByRole('button',{ name: 'Create Lead'}).click();
    await expect(page.locator('#sectionHeaderTitle_leads').filter({ hasText: 'View Lead'} )).toBeVisible();
    await page.getByRole('link',{ name: 'Edit'}).click();
    await expect(page.locator('#updateLeadForm_companyName')).toBeVisible();
    page.fill('#updateLeadForm_companyName','Testleaf');
    await page.getByRole('button',{ name: 'Update'}).click();
    await expect(page.locator('#sectionHeaderTitle_leads').filter({ hasText: 'View Lead'} )).toBeVisible();
})


async function loginSalesForce(page: Page, salutation:String, lastName: String, module: String){
    await page.goto('https://login.salesforce.com/')
    await page.getByText('Username',{ exact: true }).fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.click('#Login');
    await page.waitForTimeout(10000)
    await page.getByRole('button', { name: 'App Launcher' }).click();
    await page.getByLabel('View All Applications', {exact: true}).click();
    await page.getByPlaceholder('Search apps or items...').fill(`${module}`);
}

test('03.Create Individuals',async({ page })=>{
    const salutation='Mr.';
    const lastName='Rajendran';
    await loginSalesForce(page, salutation, lastName, 'Individuals');
    await page.getByRole('link', {name: 'Individuals'}).click();
    await page.getByRole('button', {name: 'New'}).click();
    await expect(page.getByRole('heading', {name: 'New Individual'})).toBeVisible();
    await page.getByPlaceholder('Last Name', {exact: true}).fill(`${lastName}`);
    await page.getByRole('button', {name: 'Save'}).nth(1).click();
    await expect(page.getByText(`Individual "${lastName}" was created`)).toBeVisible();
});

test('04. Edit Individuals', async({ page }) =>{
    const salutation='Mr.';
    const lastName='Rajendran';
    await loginSalesForce(page, salutation, lastName, 'Individuals');
    await page.getByRole('link', {name: 'Individuals'}).first().click();
    await page.getByRole('searchbox', { name: 'Search this list...' }).fill(`${lastName}`);
    await page.getByRole('searchbox', { name: 'Search this list...' }).press('Enter');
    await page.getByRole('button', { name: 'Show Actions' }).first().click();
    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await expect(page.getByRole('heading', { name: `Edit ${lastName}` })).toBeVisible();
    await page.getByRole('button', { name: 'Salutation' }).click();
    await page.locator(`.uiMenuItem.uiRadioMenuItem > a:has-text('${salutation}')`).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await expect(page.getByText(`Individual "${lastName}" was saved`).first()).toBeVisible();
})