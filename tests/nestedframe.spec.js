import {test,expect} from '@playwright/test';
test('iframe practice', async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
   const frame1= await page.frameLocator('#frm1');
   await frame1.locator('//select[@id="course"]').selectOption("java");

   const frame2= await page.frameLocator('#frm2');
   await frame2.locator('#firstName').fill('Aakash');
   await frame2.locator('#firstName').fill('A E');
   await frame2.locator('#firstName').fill('#englishchbx');
   await frame2.locator('#email').fill('ahahahah@gmail.com');

   const frame3=await page.frameLocator('#frm3');
   const frame3_1=await frame3.frameLocator('#frm1');
   await frame3_1.locator('//select[@id="course"]').selectOption("java");
   const frame3_2= await frame3.frameLocator('#frm2');
   await frame3_2.locator('#firstName').fill('Aakash');
   await frame3_2.locator('#firstName').fill('A E');
   await frame3_2.locator('#firstName').fill('#englishchbx');
   await frame3_2.locator('#email').fill('ahahahah@gmail.com');
   const frame3_3= await frame3.locator('#frm3');


})