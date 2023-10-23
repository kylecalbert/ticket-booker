const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wzt5hr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
