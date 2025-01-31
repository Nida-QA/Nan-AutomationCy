import dashboardPage from "../../../pageObjects/dashboardPage";
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify that the user can log in to the application', () => {

  beforeEach(() => {
    // Navigate to the particular env 
    cy.visit(Utility.getUrl());
  })

  it('Verify main page has title "Sign In to Vonni QC"', () => {
    const pageTitle = "Sign In to Vonni QC"
    loginPage.verifyPageTitle(pageTitle);
    cy.log("Login page title verified");
  })

  it('Verify "Sign In with Microsoft" option is appearing', () => {
    loginPage.verifySignInToMicrosoft();
    cy.log("Sign in to microsoft button is enabled");
  })

  it('Verify user is able to check and uncheck "Remember Me"', () => {
    loginPage.toggleRememberMeButton("Check");
    cy.log("'Remember Me' checkbox checked");
    loginPage.toggleRememberMeButton("UnCheck");
    cy.log("'Remember Me' checkbox unchecked");
    cy.log("'Remember Me' checkbox is working as required");
  })

  it('Verify user cannot be logged in with incorrect credentials', () => {
    loginPage.fillEmail(Cypress.env('incorrectEmail'));
    loginPage.fillPassword(Cypress.env('incorrectPassword'));
    loginPage.clickSubmit();
    cy.log("Verifying login");
    cy.get(loginPage.notificationHeader).should('not.exist');
    cy.log("User unable to log in with incorrect credentials");
  })

  it('Verify user is successfully logged in with the correct credentials', () => {
    loginPage.fillEmail(Utility.getEmail());

    loginPage.fillPassword(Utility.getPassword());
    loginPage.clickSubmit();
    cy.log("Verifying login");
    cy.get(loginPage.notificationHeader).should('exist');
    cy.log("User successfully logged in");
  })

  it('Verify user is able to logout \
      Verify that the user redirects to the login page after logout', () => {
    dashboardPage.openLeftMenu();
    dashboardPage.clickLogout();
    cy.url().should('contain', 'auth/login');
    cy.log("User successfully logged out");
  })
})