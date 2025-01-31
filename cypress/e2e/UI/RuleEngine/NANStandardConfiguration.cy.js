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

    it('Verify that admin can see the search listing of the ACI findings for the NAN Standard Rule Engine.', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.goToNANStandardPage();
        RulesEnginePage.NANConfigSearch();
    })
    it('Verify that admin can toogle the any of the ACI findings for the NAN Standard Rule Engine.', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.goToNANStandardPage();
        RulesEnginePage.NANToggleSwitch();
    })

    it('Verify that default toggle state should be set as active state.', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.goToNANStandardPage();
        cy.wait(2000)
        RulesEnginePage.NANAddRule(name01);

    })


})