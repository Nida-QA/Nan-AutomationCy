const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportFilename: "nan-test-automation-report",
    reportTitle: 'NAN Test Automation',
    charts: true,
    reportPageTitle: 'NAN Test Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        print(s) {
          console.log(s)
          return null
        },
      })
    },
    testIsolation: false,
    defaultCommandTimeout: 90000,
    viewportWidth: 1900,
    viewportHeight: 1280,
  },

  env: {
    // Set the environment variables here
    TESTING_URL: process.env.TESTING_URL,
    TESTING_EMAIL: process.env.TESTING_EMAIL,
    TESTING_PASSWORD: process.env.TESTING_PASSWORD,
    TESTING_BASE_URL: process.env.TESTING_BASE_URL,
    DEV_URL: process.env.DEV_URL,
    DEV_EMAIL: process.env.DEV_EMAIL,
    DEV_PASSWORD: process.env.DEV_PASSWORD,
    DEV_BASE_URL: process.env.DEV_BASE_URL,
    STAGING_URL: process.env.STAGING_URL,
    STAGING_EMAIL: process.env.STAGING_EMAIL,
    STAGING_PASSWORD: process.env.STAGING_PASSWORD,
    STAGING_BASE_URL: process.env.STAGING_BASE_URL,
    incorrectEmail: process.env.INCORRECT_EMAIL,
    incorrectPassword: process.env.INCORRECT_PASSWORD,
    incorrectZipCode: process.env.INCORRECT_ZIP_CODE,
    invalidEmailAddress: process.env.INVALID_EMAIL_ADDRESS,
    STAGING_EMAIL_Rev: process.env.STAGING_EMAIL_rev,
    STAGING_URL_Rev: process.env.STAGING_URL_Rev,
    STAGING_PASSWORD_Rev: process.env.STAGING_PASSWORD_Rev,
    STAGING_BASE_URL_Rev: process.env.STAGING_BASE_URL_Rev,
    STAGING_EMAIL_man: process.env.STAGING_EMAIL_man,
    STAGING_URL_man: process.env.STAGING_URL_man,
    STAGING_PASSWORD_man: process.env.STAGING_PASSWORD_man,
    STAGING_BASE_URL_man: process.env.STAGING_BASE_URL_man,
    TOKEN: process.env.ACCESS_TOKEN
  },

  experimentalWebKitSupport: true

});
