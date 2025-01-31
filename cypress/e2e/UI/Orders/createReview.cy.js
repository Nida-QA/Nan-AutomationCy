import ordersPage from "../../../pageObjects/ordersPage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify that the user can create a new review', () => {

    before(() => {
        // Navigate to the particular env 
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify user is unable to create a review with any empty field \
        Address Field Validation: Submit the form with an invalid address \
        Error Message Display: Submit the form with incomplete or invalid data', () => {
        const emptyReviewName = '{backspace}';
        ordersPage.goToOrdersPage();
        ordersPage.fillCreateReviewPopup(emptyReviewName);
        cy.get(ordersPage.saveButton).should('be.disabled');
        ordersPage.closeCreateReviewPopup();
    })

    it('Verify user is able to create a review \
        State Dropdown Selection: Test the state dropdown by selecting different states from the list \
        Zip Code - Numeric Values Only: Enter non-numeric characters \
        Form Submit Button State: Check the appearance and behavior of the form submit button', () => {
        const randomGenerator = () => Cypress._.random(0, 1e5)
        const reviewName = `TestReview_${randomGenerator()}`;
        ordersPage.goToOrdersPage();
        cy.wait(5000)
        ordersPage.fillCreateReviewPopup(reviewName);
        cy.get(ordersPage.saveButton).click();
        ordersPage.verifyOrderInOrderListingTable(reviewName);
    })

    it('Verify user is unable to create a review with invalid zipcode', () => {
        const randomGenerator = () => Cypress._.random(0, 1e5)
        const reviewName = `TestReview_${randomGenerator()}`;
        const incorrectZipCode = "52@43"
        ordersPage.goToOrdersPage();
        ordersPage.fillCreateReviewPopup(reviewName, incorrectZipCode);

        cy.get(ordersPage.saveButton).should('be.disabled');
        ordersPage.closeCreateReviewPopup();
    })
})