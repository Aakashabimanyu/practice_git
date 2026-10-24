import { test } from '@playwright/test';

test('all products', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    const discountPrice = page.locator(`//span[@class="product-discountPercentage"]`);
    const discountedPrice = await discountPrice.count();
    console.log('discountedproducts:', discountedPrice);
    async function getMinimumPrice() {
        const pricesText = page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and text())]`).allInnerTexts();
        const pricesCount = await pricesText.count();
        console.log('withoutDiscount:', pricesCount);

        const prices = await pricesText.map(prices => Number(prices.replace('Rs. ', '')))
        const minimumvalue = Math.min(...prices)
        console.log('minimumPrice:', minimumvalue);

    }


    const minproduct = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]//span[(@class="product-discountedPrice" and normalize-space()="Rs. ${minimumvalue}")or (not(@class) and normalize-space()="Rs. ${minimumvalue}")]/ancestor::div[@class="product-price"]/preceding-sibling::h4[@class="product-product"]`).allInnerTexts();
    console.log('productName:', minproduct);


})