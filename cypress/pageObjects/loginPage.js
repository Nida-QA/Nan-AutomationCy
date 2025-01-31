import Utility from "../support/utility"
class loginPage {

    //Locators
    emailField = '[data-test-id="email-input"]'
    passwordField = '[data-test-id="password-input"]'
    submitButton = '[data-test-id="login-btn"]'
    notificationHeader = '.header__notifications'
    pageHeading = "h1"
    microsoftButton = ".microsoft-btn"
    remmeberMeButton = "[data-test-id='login-remember']"
    forgotPasswordLink = "[href*='forgot-password']"
    resetPasswordButton = "[data-test-id='forgot-password-btn']"
    forgotEmail = '[data-test-id="forgot-email"]'

    // Methods
    fillEmail(email) {
        cy.get(this.emailField).type(email);
    }
    
    fillPassword(password) {
        cy.get(this.passwordField).type(password);
    }
    
    clickSubmit() {
        cy.get(this.submitButton).click();
    }

    login(email, password){
        this.fillEmail(email ? email : Utility.getEmail());
        this.fillPassword(password ? password :  Utility.getPassword());
        this.clickSubmit();
        cy.get(this.notificationHeader).should('exist');
    }

    verifyPageTitle(pageTitle){
        cy.get(this.pageHeading).contains(pageTitle);
    }

    verifySignInToMicrosoft(){
        cy.get(this.microsoftButton).should('be.enabled');
    }

    toggleRememberMeButton(toggleVal){
        if(toggleVal == "Check"){
            cy.get(this.remmeberMeButton).forceClick();
            cy.get(this.remmeberMeButton).should('be.checked')
        }
        else {
            cy.get(this.remmeberMeButton).forceClick();
            cy.get(this.remmeberMeButton).should('not.be.checked')
        }
    }

    clickOnForgotPassword(){
        cy.get(this.forgotPasswordLink).click();
    }

    fillForgotEmail(forgot_Email){
        cy.get(this.forgotEmail).type(forgot_Email);
    }

    verifyResetButtonIsDisabled(){
        cy.get(this.resetPasswordButton).should('not.be.enabled');
    }

    verifyEmailDoesNotExist(){
        const alertXpath = "//*[@role='alert' and contains(@aria-label, 'does not exists')]";
        cy.get(this.resetPasswordButton).click();
        cy.xpath(alertXpath).should('exist');
    }
} 

module.exports = new loginPage();