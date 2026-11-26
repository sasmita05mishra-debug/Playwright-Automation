const { test, expect } = require('@playwright/test');

test("Verify the  the EventHub login page loaded successfully", async({page})=>{

await  page.goto("https://eventhub.rahulshettyacademy.com");
await expect(page).toHaveTitle("EventHub — Discover & Book Events");

});