import loginPage from "../../../pageObjects/loginPage"
import Utility, { getLastMonthFirstDateAsString } from "../../../support/utility"
import dashboardPage from "../../../pageObjects/dashboardPage"


describe('Restricted Words', () => {
    const randomGenerator = () => Cypress._.random(0, 1e5)
    const name01 = randomGenerator();

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that admin can view the performance overview section on top of the dashboard.', () => {
        cy.wait(5000);
        dashboardPage.PerformanceAssertion();
    })

    it('Verify that admin can view the Total complete order per day in dashboard.', () => {
        cy.wait(5000);
        //const lastMonth = getLastMonthFirstDateAsString();
        // console.log(lastMonth);
        dashboardPage.TotalPerDayOrderCountAssertion();
    })

    it('Verify that admin can see the total no of complete orders in performance overview section', () => {
        cy.reload();
        cy.wait(5000);
        dashboardPage.TotalCompleteOrderAssertion();
    })

    it('Verify that admin can see the weekly filter in graph view under performance overview section to view the progress.', () => {
        cy.wait(5000);
        dashboardPage.FilterDashboard();

    })
    it('Verify that admin can see the top clients section under the performance view.', () => {
        cy.wait(5000);
        dashboardPage.TopClientAsser();

    })

    it('Verify that system is showing the status section on the right side of the top client section.', () => {
        cy.wait(5000);
        dashboardPage.StatusHeaderAsser();

    })

    it('Verify that system is showing the order section beneath of the top client section.', () => {
        cy.wait(5000);
        dashboardPage.OrderHeaderAsser();

    })

    it('Verify that system is showing the user only the 6 recent orders.', () => {
        cy.wait(5000);
        dashboardPage.NoOfRowsOrder();

    })
    it('Verify that system is showing the user only the 6 recent orders.', () => {
        cy.wait(5000);
        dashboardPage.ViewallOrderButtonAsser();

    })
    it('Verify that system is showing the user only the 6 recent orders.', () => {
        cy.wait(5000);
        dashboardPage.SortButton();

    })

})