// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  fullyParallel: false,        // आत्ता false ठेव — debug सोपं होतं
  retries: 0,                  // fail झाला तर retry नको आत्ता
  workers: 1,                  // एकच browser आत्ता
  
  reporter: 'html',            // test run नंतर HTML report बनेल
  timeout: 30_000,             // प्रत्येक test साठी 30 सेकंदाची timeout
  expect: {
    timeout: 6000,             // expect साठी 6 सेकंदाची timeout
  },
  
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,           // browser दिसेल — important for learning
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout:10_000, // प्रत्येक action साठी 10 सेकंदाची timeout
    navigationTimeout: 20_000, // navigation साठी 20 सेकंदाची timeout

  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});