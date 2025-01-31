import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"
import RulesEnginePage from "../../../pageObjects/rulesEnginePage"

describe('Restricted Words', () => {
    const randomGenerator = () => Cypress._.random(0, 1e5)
    const name01 = randomGenerator();

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that when user click on rules link then redirect to the rules page successfully', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)

    })

    it('Verify that user can see the ACI rules in form of list view which contain three column name (ACI Code, Description and status)', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.ACIPageAssertions();
    })

    it('Verify that Status Column should contain a toggle option against each record & default should be active state', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        // RulesEnginePage.ACIToggelButtonCheck();
        cy.wait(3000)
        RulesEnginePage.ACIStatusDropDown();
    })

    it('Verify that user can search the record on the base of code and description', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.ACISearch();
    })
})