import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"
import dashboardPage from "../../../pageObjects/dashboardPage"


describe('Dashboard_Reviewer', () => {
        const randomGenerator = () => Cypress._.random(0, 1e5)
        const name01 = randomGenerator();

        before(() => {
                cy.visit(Utility.getUrl());
                loginPage.login();
        })

        it('Verify that user was able to see the dashboard screen', () => {
                cy.wait(5000);
                dashboardPage.DasboardHeaderAsser();
        })

        it('Verify that on left menu user was able to see his/her profile pic with user name', () => {
                cy.wait(5000);
                dashboardPage.ImageCheckAsser();
        })

        it('Verify that when user hover on the left menu item then it will show selected item on the list', () => {
                cy.wait(5000);
                dashboardPage.MenuButton();
                dashboardPage.HoveCheckAsser();
        })

})