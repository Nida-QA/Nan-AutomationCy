// ***********************************************
// This commands.js allows to create
// various custom commands and overwrite
// existing commands.
// ***********************************************


/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import addContext from 'mochawesome/addContext';
import 'cypress-file-upload';

Cypress.Commands.overwrite('log', (log, message, ...args) => {
    // print to Cypress Command Log to preserve the existing functionality
    log(message, ...args)
    // send the formatted message down to the Node callback in the cypress.config.js to be printed to the terminal
    cy.task('print', [message, ...args].join(', '), { log: false })
})

Cypress.Commands.add('addContext', (context) => {
  cy.once('test:after:run', (test) => addContext({ test }, context));
});

Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject) => {
  cy.wrap(subject).click({force: true})
});
