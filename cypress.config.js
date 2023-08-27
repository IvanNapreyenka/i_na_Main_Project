const { defineConfig } = require("cypress");

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
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/**/*.spec.{js, jsx, ts,tsx}',
  },
  viewportWidth: 1920,
  viewportHeight: 1080
});
