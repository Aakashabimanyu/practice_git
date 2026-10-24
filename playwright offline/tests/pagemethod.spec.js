import {test} from '@playwright/test'

test('intro', async({page})=>{
    await page.goto("https://www.flipkart.com/")
})