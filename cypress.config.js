const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push("--incognito");                
            return launchOptions;
        }

        if (browser.name === 'electron') {                
            launchOptions.preferences.incognito = true;
            return launchOptions;
        }
    });
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/**/*.spec.{js, jsx, ts,tsx}',
    include: ["./node_modules/cypress", "cypress/**/*.js"]
  },
  viewportWidth: 1920,
  viewportHeight: 1080
});
