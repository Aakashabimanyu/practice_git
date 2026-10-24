import {test,expect} from '@playwright/test';
test('iframe practice', async({page})=>{
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows//');
    await page.locator('//li[@id="iFrame"]').click();
    const frame1= page.frameLocator('//iframe[@name="globalSqa"]');

    await frame1.locator(`//img[@alt="JMeter Training"]`).click();
    await frame1.locator('//img[@alt="Mobile Application Testing Training"]').click();

    await page.locator('//div[@class="menu-interaction-container"]//a[@href="https://www.globalsqa.com/demo-site/draganddrop/"]').click();
    const frame2=await page.frameLocator('//iframe[@src="../../demoSite/practice/droppable/photo-manager.html"]');
    await frame2.locator('//img[@src="images/high_tatras3_min.jpg"]').dragTo(frame2.locator('//div[@id="trash"]'));
    await page.waitForTimeout(5000);

 
   



})

