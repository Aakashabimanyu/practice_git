import { test } from '@playwright/test';

test('Find minimum T-shirt price and product', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    // const products = page.locator('//li[@class="product-base"]');

    // console.log('Product Count:', await products.count());
    async function getMinimumPrice() {
        const pricesText = await page.locator(
            '//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and text())]'
        ).allInnerTexts();

        // const prices = pricesText.map(text =>
        //     Number(text.replace(/[^\d]/g, ''))
        );

        const minimumPrice = Math.min(...prices);

        console.log('Minimum Price:', minimumPrice);

        const productName = await getProductName(minimumPrice);

        console.log('Product Name:', productName);

    }


    async function getProductName(miniPrice) {

        const productName = await page.locator(`//li[@class="product-base"]/descendant::span[(@class="product-discountedPrice" and normalize-space()="Rs. ${miniPrice}") or (not(@class) and normalize-space()="Rs. ${miniPrice}")]/ancestor::li[@class="product-base"]/descendant::h4[@class="product-product"]`).allInnerTexts();

        return productName;
    }
    
    await getMinimumPrice();
});