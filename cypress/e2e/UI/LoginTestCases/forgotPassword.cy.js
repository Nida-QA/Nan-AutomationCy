import dashboardPage from "../../../pageObjects/dashboardPage";
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify forgot password functionality', () => {

  before(() => {
    // Navigate to the particular env 
    cy.visit(Utility.getUrl());
  })

  it('Verify that user can click on Forgot password option on login screen.', () => {
    loginPage.clickOnForgotPassword();
    cy.url().should('contain', 'forgot-password');
  })

  it('Verify that system is not enabling the forgot password button incase email field is not properly filled.', () => {
    loginPage.fillForgotEmail(Cypress.env('invalidEmailAddress'));
    loginPage.verifyResetButtonIsDisabled();
  })

  it('Verify that system is showing the Error incase entered email is not found.\
      Verify that system is validating the entered email address on the forgot password screen.', () => {
    loginPage.fillForgotEmail(Cypress.env('incorrectEmail'));
    loginPage.verifyEmailDoesNotExist();
  })
})