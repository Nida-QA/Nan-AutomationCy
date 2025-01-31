import ordersPage from "../../../pageObjects/ordersPage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify Order Searching', () => {

    const randomGenerator = () => Cypress._.random(0, 1e5)
    const reviewName = `NAN-10-test-0331`;
    const address = `TestAddress_${randomGenerator()}`;
    const addressSearch = 'EER';

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();

        // Create a new order
        ordersPage.goToOrdersPage();
        ordersPage.fillCreateReviewPopup(reviewName, "", "", "", address);
        cy.get(ordersPage.saveButton).click();
        ordersPage.closeCreateReviewPopup();
        cy.reload();
    })

    it('Verify order listing table shows the searched order by name that is created', () => {
        ordersPage.goToOrdersPage();

        // Verify that the newly created order can be searched 
        ordersPage.searchOrder(reviewName);
        // ordersPage.verifyOrderInOrderListingTable(reviewName);
        ordersPage.verifyCountOfOrdersShown(1);
    })

    it('Verify order listing table shows the searched order by address that is created', () => {
        ordersPage.goToOrdersPage();

        // Verify that the newly created order can be searched 
        //ordersPage.searchOrder(address);
        ordersPage.searchOrder(addressSearch);
        // ordersPage.verifyOrderInOrderListingTable(reviewName);
        ordersPage.verifyCountOfOrdersShown(1);
    })

    it('Verify order listing table does not show the searched order if its not present in the table', () => {
        ordersPage.goToOrdersPage();

        // Verify that no order is displayed if its not created 
        const incorrectOrderName = "NotCreatedOrder1234"
        ordersPage.searchOrder(incorrectOrderName);
        ordersPage.verifyNoRecordsAreDisplayed();
    })

})