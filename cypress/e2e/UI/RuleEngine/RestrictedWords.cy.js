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

    it('Verify that user able to goto the restricted words page on the rules engine page.', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(5000)
        RulesEnginePage.goToRestrictedPage();
        RulesEnginePage.AddButtonRestrictedCheck();
    })

    it('Verify that Status Column should contain a toggle option against each restricted words record.', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(5000)
        RulesEnginePage.goToRestrictedPage();
        RulesEnginePage.ToggleButtonRestrictedCheck();

    })

    it('Verify that default toggle state should be set as active state', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(5000)
        RulesEnginePage.goToRestrictedPage();
        RulesEnginePage.AddButtonRestrictedCheck();
        RulesEnginePage.AddWordPopup(name01);
        RulesEnginePage.ToggleButtonRestrictedCheck();

    })

    it('Verify that user can set restricted words in active state from the given toggle', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(5000)
        RulesEnginePage.goToRestrictedPage();
        RulesEnginePage.ToggleButtonRestrictedCheck();
        RulesEnginePage.SetToggleActiveOrInActive();

    })

    it('Verify that user can change the status filter to Active ', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(5000)
        RulesEnginePage.goToRestrictedPage();
        RulesEnginePage.StatusFilterActive();

    })

    it('Verify that user can change the status filter to InActive ', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(5000)
        RulesEnginePage.goToRestrictedPage();
        RulesEnginePage.StatusFilterInActive();

    })

    it('Verify count of orders displayed as per pagination', () => {
        let wordCount = 25;
        RulesEnginePage.goToRulePage();
        cy.wait(5000)
        RulesEnginePage.goToRestrictedPage();
        cy.wait(3000)
        RulesEnginePage.showRestrictedWords(wordCount);
        // RulesEnginePage.verifyCountOfWordsShown(wordCount);

    })

    it('Verify that user can update the rectricted word record', () => {
        RulesEnginePage.goToRulePage();
        cy.wait(5000)
        RulesEnginePage.goToRestrictedPage();
        cy.wait(2000)
        RulesEnginePage.EditRestrictedWord(name01);

    })

})