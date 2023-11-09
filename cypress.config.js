const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://webmani-test.manipulae.com.br/cotar',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    video: true,
    videosFolder: 'cypress/video',
  },
});
