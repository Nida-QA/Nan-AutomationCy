import clientProfilePage from "../../../pageObjects/clientProfilePage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify Client profile creation', () => {

    const randomGenerator = () => Cypress._.random(0, 1e5)
    const clientCompanyName = `TestClient_${randomGenerator()}`;
    const zipCode = randomGenerator();

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that admin is redirected to client profile listing screen after clicking on the client profile option', () => {
        clientProfilePage.goToClientProfilePage();
    })

    it('Verify all fields such as Company name, address, city, state, zipcode are appearing on add client form', () => {
        clientProfilePage.verifyAllFieldsAreVisibleOnAddNewClient();
    })

    it('Verify user is unable to create a client with any empty field', () => {
        const emptyCompanyName = '{backspace}';
        clientProfilePage.goToClientProfilePage();
        clientProfilePage.addNewClient(emptyCompanyName);
        cy.get(clientProfilePage.addClient_SaveButton).should('be.disabled');
        clientProfilePage.closeAddClientPopup();
    })

    it('Verify user is able to create a new client with all fields', () => {
        clientProfilePage.goToClientProfilePage();
        clientProfilePage.addNewClient(clientCompanyName);
        cy.get(clientProfilePage.addClient_SaveButton).click();
        clientProfilePage.closeAddClientPopup();
        cy.reload();
        clientProfilePage.verifyClientInClientListingTable(clientCompanyName);
    })

    it('Verify user is unable to create a new client with invalid zipcode', () => {
        clientProfilePage.goToClientProfilePage();
        clientProfilePage.addNewClient(clientCompanyName, Cypress.env('incorrectZipCode'));

        cy.get(clientProfilePage.addClient_SaveButton).should('be.disabled');
        clientProfilePage.closeAddClientPopup();
    })

    it('Verify user is unable to create a new client with invalid email address', () => {
        clientProfilePage.goToClientProfilePage();
        clientProfilePage.addNewClient(clientCompanyName, zipCode, Cypress.env('invalidEmailAddress'));

        cy.get(clientProfilePage.addClient_SaveButton).should('be.disabled');
        clientProfilePage.closeAddClientPopup();
    })

})