import ordersPage from "../../../pageObjects/ordersPage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify that the user can review an order', () => {

    before(() => {
        // Navigate to the particular env 
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify user is able to archive a review if its completed', () => {
        ordersPage.goToOrdersPage();

        // Apply status filter 
        cy.get(ordersPage.advanceSearchFilterButton).click();
        ordersPage.expandAdvanceFilterOption("Status");
        ordersPage.selectOrderStatusCompletedFromFilter("Completed");
        cy.get(ordersPage.applyFilterButton).click();
        cy.get(ordersPage.loader).should('exist');
        ordersPage.orderClickApplyFilterButton();
        // ordersPage.verifyArchiveOrderButtonIsDisabled();
    })
})