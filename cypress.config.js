const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push("--incognito");                
            return launchOptions
        }

        if (browser.name === 'electron') {                
            launchOptions.preferences.incognito = true               
            return launchOptions
        }
    })
      allureWriter(on, config); 
      return config;
    },
    specPattern: 'cypress/**/*.spec.{js, jsx, ts,tsx}',
    include: ["./node_modules/cypress", "cypress/**/*.js"]
  },
  viewportWidth: 1920,
  viewportHeight: 1080
});
