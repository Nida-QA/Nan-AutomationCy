// ***********************************************************
// This support/e2e.js is processed and
// loaded automatically before test files.
//
// A place to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

import './commands'
import 'cypress-mochawesome-reporter/register';
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

require('cypress-xpath');