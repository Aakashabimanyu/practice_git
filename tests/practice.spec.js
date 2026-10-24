import { test, expect } from '@playwright/test';

test('Select iPhone 17 Pro with maximum rating', async ({ page }) => {
     await page.goto('https://www.amazon.in');

    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iPhone 17 Pro');
    await page.locator('#nav-search-submit-button').click()
    await page.waitForLoadState();

    const ratingsLocator = page.locator('//span[contains(text(),"iPhone 17 Pro") and not(contains(text(),"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[text()="4.5"]');
    const ratings = (await ratingsLocator.allTextContents()).map(r => Number(r));

    const maxRating = Math.max(...ratings);
   
    console.log('Maximum rating:', maxRating);
    
    const addToCart = page.locator(`//span[contains(text(),"iPhone 17 Pro") and not(contains(text(),"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[text()="${maxRating}"]/ancestor::div[@role="listitem"]//input[@aria-label="Add to cart"]`
).first();
    await addToCart.click();

});