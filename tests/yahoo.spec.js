
import { test, expect } from '@playwright/test';

test('Select iPhone 17 Pro with maximum rating', async ({ page }) => {

    // Step 1: Open Amazon
    await page.goto('https://www.amazon.in/s?k=iphone17');

    // Step 2: Locate iPhone 17 Pro products, excluding Pro Max
    const products = page.locator(`//span[contains(text(),"iPhone 17 Pro") and not(contains(text(),"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]`);

    await expect(products.first()).toBeVisible({ timeout: 15000 });

    // Step 3: Get all ratings
    const ratingsLocator = page.locator('//span[contains(text(),"iPhone 17 Pro") and not(contains(text(),"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//a[contains(@aria-label,"out of 5 stars, rating details")]'
    );

    const ratingLabels = await ratingsLocator.evaluateAll(elements =>elements.map(element => element.getAttribute('aria-label'))
    );

    const ratings = ratingLabels.map(label => {
        const match = label?.match(/([\d.]+) out of 5 stars/);
        return match ? Number(match[1]) : 0;
    });

    // Step 4: Find maximum rating without a for loop
    const maxRating = Math.max(...ratings);

    const bestIndex = ratings.indexOf(maxRating);

    if (bestIndex === -1 || maxRating === 0) {
        console.log('No rated iPhone 17 Pro product found');
        return;
    }

    // Step 5: Get the highest-rated product
    const bestProduct = products.nth(bestIndex);

    const productLink = bestProduct.locator(`//a[.//span[contains(text(),"iPhone 17 Pro") and not(contains(text(),"Pro Max"))]]`).first();

    await expect(productLink).toBeVisible({ timeout: 10000 });

    const productName = (await productLink.innerText()).trim();

    console.log('Maximum rating:', maxRating);
    console.log('Final Product Name:', productName);

    // Step 6: Click the final product
    await productLink.scrollIntoViewIfNeeded();
    await productLink.click();

    console.log('Successfully clicked the highest-rated product');
});
