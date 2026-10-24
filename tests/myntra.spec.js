
const { test, expect } = require('@playwright/test');

test('Verify T-shirt count on Myntra', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts/');

    // Get product count
    const tshirts = page.locator('//li[@class="product-base"]');
    const count = await tshirts.count();
    console.log('T-shirt count:', count);

    const tshirtprice = page.locator('//span[@class="product-discountedPrice"]');
    // Get price count
    const pricecount = await tshirtprice.count();
    console.log('T-shirt price count:', pricecount);

    // Get all prices as text
    const prices = await tshirtprice.allTextContents();
    // Use map() to convert price strings into numbers
    const numericPrices = prices.map(price => Number(price.replace('Rs. ', '')))
    // Find minimum price
    const minPrice = Math.min(...numericPrices)
    console.log('Minimum T-shirt price: Rs.', minPrice);


    const tshirtname = page.locator('//span[@class="product-discountedPrice"]/ancestor::div[@class="product-productMetaInfo"]//h3[@class="product-brand"]');
    const names = await tshirtname.allTextContents();

    // Get the product name at the same index
    const minIndex = numericPrices.indexOf(minPrice);
    const minProductName = names[minIndex];
    console.log('Product name:', minProductName);


    const remainingproducts = page.locator("")
});
