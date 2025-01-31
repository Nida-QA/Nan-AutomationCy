import clientProfilePage from "../../../pageObjects/clientProfilePage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify Client profile listing', () => {

    const randomGenerator = () => Cypress._.random(0, 1e5)
    const clientCompanyName = `TestClient_${randomGenerator()}`;

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that admin is redirected to client profile listing screen after clicking on the client profile option', () => {
        clientProfilePage.goToClientProfilePage();
    })

    it('Verify that user can see "Status" column on client profile listing screen', () => {
        clientProfilePage.verifyStatusColumnIsDisplayed();
    })

    it('Verify that user can see "Action" column on client profile listing screen', () => {
        clientProfilePage.verifyActionColumnIsDisplayed();
    })

    it('Verify that user can click "Add client button" on client profile listing screen \
        Verify that user is redirected to a new screen to add a new client by clicking the add client button on listing screen', () => {
        clientProfilePage.verifyClientPopUpIsDisplayed();
        clientProfilePage.closeAddClientPopup();
    })

    it('Verify that user can see "Pagination" on client profile listing screen', () => {
        clientProfilePage.goToClientProfilePage();
        clientProfilePage.verifyPaginationIsAppearing();
    })

    it('Verify count of clients displayed as per pagination', () => {
        let clientsCount = 50;
        clientProfilePage.goToClientProfilePage();
        clientProfilePage.showClients(clientsCount);
        clientProfilePage.verifyCountOfClientsShown(clientsCount);
        cy.reload();
        clientsCount = 25;
        clientProfilePage.showClients(clientsCount);
        clientProfilePage.verifyCountOfClientsShown(clientsCount);
    })

    it('Verify that user can search based on wild card selection in "search bar option" on top of the columns in client profile listing screen', () => {
        clientProfilePage.goToClientProfilePage();

        clientProfilePage.addNewClient(clientCompanyName);
        cy.get(clientProfilePage.addClient_SaveButton).click();
        clientProfilePage.closeAddClientPopup();
        cy.reload();
        clientProfilePage.verifyClientInClientListingTable(clientCompanyName);

        clientProfilePage.searchClient(clientCompanyName);
        clientProfilePage.verifyClientInClientListingTable(clientCompanyName);
        // clientProfilePage.verifyCountOfClientsShown(1);
    })
})