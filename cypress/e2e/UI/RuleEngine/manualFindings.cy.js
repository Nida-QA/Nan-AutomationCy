import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"
import RulesEnginePage from "../../../pageObjects/rulesEnginePage"
import ordersPage from "../../../pageObjects/ordersPage"

describe('Restricted Words', () => {
    const randomGenerator = () => Cypress._.random(0, 1e5)
    const name01 = randomGenerator();

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that user able to see the manual finding group section on the Rules section.', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.AsserManualFinding();

    })

    it('Verify that when user click on manual finding group link then this section display on the page', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.ManualFindingPage(name01);

    })

    it('Verify that user able to save the +add manual finding group data successfully.', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.GroupAddition(name01);

    })

    it('Verify that user able to edit the already save manual finding group data', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.EditGroup(name01);

    })

    it('Verify that user able to delete the manual finding group data', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(3000)
        RulesEnginePage.DeletManualGroup(name01);

    })

    // Screen change required for the following test 

    /*  it('Verify that user able to find the newly created manual group in order finding drop down', () => {
           ordersPage.goToOrdersPage();
           cy.wait(5000)
           RulesEnginePage.CheckGroupOrderFinding();
      
       }) */


})