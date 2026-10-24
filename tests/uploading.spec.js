import { test, expect } from '@playwright/test';
test('File uploading', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');

    // await page.locator('#uploadFile').setInputFiles('./screen shot/flipkart.png')

    await page.locator('#uploadFile').setInputFiles("C:\\Users\\Admin\\Desktop\\task1screenshot.png");
})

test('Upload multiple files', async ({ page }) => {
    await page.goto('https://uploadnow.io/en/upload');

    await page.setInputFiles('//input[@type="file"]', ['./task1screenshot.png',"C:\\Users\\Admin\\Desktop\\task1screenshot.png",
    ]);

    await page.getByRole('button', { name: "Validate and upload" }).click();
    
})

