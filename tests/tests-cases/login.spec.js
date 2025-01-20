const { test, expect } = require('@playwright/test');

test('Login com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.screenshot({ path: "./tests/tests-case/evidencias/login.png" });
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Mercado Livre', async ({ page }) => {
  await page.goto('https://www.mercadolivre.com.br/');
  await page.click('button[data-andes-carousel-snapped-control="next"]');

  // Utilizando um seletor mais robusto baseado em texto parcial
  await expect(page.locator('*:contains("Kit Com 10 Cuecas Boxer Algodão Sem Costura Zorba")')).toBeVisible();
});

test('Mercado Livre', async ({ page }) => {
  await page.goto('https://www.mercadolivre.com.br/');
  await page.click('button[data-andes-carousel-snapped-control="next"]');

  // Utilizando um seletor mais robusto baseado em texto parcial
  await expect(page.locator('*:contains("Kit Com 10 Cuecas Boxer Algodão Sem Costura Zorba")')).toBeVisible();
});