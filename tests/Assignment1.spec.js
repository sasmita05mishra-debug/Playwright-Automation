const { test, expect } = require('@playwright/test');

test("Verify the  the EventHub login page loaded successfully", async({page})=>{

await  page.goto("https://eventhub.rahulshettyacademy.com");
await expect(page).toHaveTitle("EventHub — Discover & Book Events");
await expect(page.locator('h1:has-text("Sign in to EventHub")')).toBeVisible();
await expect(page.getByPlaceholder("you@email.com")).toBeVisible();
await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();

});

test("Verify login page smoke check",async({page})=>{
await page.goto("https://eventhub.rahulshettyacademy.com");
await expect(page.getByLabel("password")).toBeVisible();
const currentUrl=page.url();
expect(currentUrl).toContain("/login");
await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();

})