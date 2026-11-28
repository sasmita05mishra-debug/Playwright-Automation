const { test, expect } = require('@playwright/test');

test("verify playwright config", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("/login");
    await expect(page).toHaveTitle("EventHub — Discover & Book Events");
    await expect(page.getByPlaceholder("you@email.com")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
});
test("verify Browser context page fixture", async ({ browser }) => 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("/login");
    await page.getByPlaceholder("you@email.com").fill("beginner@sample.com");
    await expect(page.getByPlaceholder("you@email.com")).toHaveValue("beginner@sample.com");
    const page2=await context.newPage();
    await page2.goto('https://eventhub.rahulshettyacademy.com');
    await expect(page.locator('h1:has-text("Sign in to EventHub")')).toBeVisible();
    console.log(await page.getByPlaceholder("you@email.com").textContent());


});