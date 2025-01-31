import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"
import dashboardPage from "../../../pageObjects/dashboardPage"

describe('Restricted Words', () => {
    const randomGenerator = () => Cypress._.random(0, 1e5)
    const name01 = randomGenerator();
    const filePath = 'doc.pdf';


    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that user should be able to redirect to the manager dashboard after login', () => {
        cy.wait(5000);
        dashboardPage.HeaderAsserMan();

    })

    it('Verify that user should be able to see the ( Order completed Today, Revision set & Turn Time) section on dashboard', () => {
        cy.wait(5000);
        dashboardPage.ManagerDashAsser();

    })

    it('Verify that user should be able to see the Recent order section with all the columns available', () => {
        cy.wait(5000);
        dashboardPage.RecentOrderAsser();

    })

    it('Verify that user should be able to see the Top client and status section on dashboard', () => {
        cy.wait(5000);
        dashboardPage.TopClient_StatusAsser();

    })

    it('Verify that as a Review Manager, When accessing the VonniQC Application then I am able to access VQC Orders Dashboard.', () => {
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();

    })

    it('Verify the Advance filters of the reviewer manager', () => {
        dashboardPage.goToOrdersPage;
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();
        cy.wait(3000);
        dashboardPage.AdvanceSearchCheckPostalInfo();
        //cy.wait(2000);
        /* dashboardPage.AdvanceSearchCheckReviewer();
         cy.wait(2000);
         dashboardPage.AdvanceSearchCheckStatus();
         cy.wait(2000);
         dashboardPage.AdvanceSearchCheckClient(); */


    })

    it('Verify the Search functionality on the orders listing screen as a reviewer manager', () => {
        dashboardPage.goToOrdersPage;
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();
        cy.wait(3000);
        dashboardPage.SearchMainCheck();

    })

    it('Verify the Export CSV file button on the orders listing screen as a reviewer manager', () => {
        dashboardPage.goToOrdersPage;
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();
        cy.wait(3000);
        dashboardPage.ExportCSVFile();

    })

    it('Verify by creating Review as a reviewer manager', () => {
        dashboardPage.goToOrdersPage;
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();
        cy.wait(3000);
        dashboardPage.CreateReviewManager(name01, filePath);
        cy.reload();

    })

    it('Verify by check get next button as a reviewer manager', () => {
        dashboardPage.goToOrdersPage;
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();
        cy.wait(3000);
        dashboardPage.NextButtonCheck();

    })

    it('Verify that As a Review Manager, When accessing the Actions in the VQC Dashboard then I am able to access the Edit of the VQC Order.', () => {
        cy.reload();
        dashboardPage.goToOrdersPage;
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();
        cy.wait(3000);
        dashboardPage.EditButtonCheck();

    })

    it('Verify that As a Review Manager, When accessing the Actions in the VQC Dashboard then I am able to access the Preview of the VQC Order.', () => {
        dashboardPage.goToOrdersPage;
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();
        cy.wait(3000);
        dashboardPage.PreviewButtonCheck();

    })

    it('Verify that in the Action Dropdwon manager has the reviewer assignment option', () => {
        dashboardPage.goToOrdersPage;
        cy.wait(5000);
        dashboardPage.OpenMenuIconButton();
        cy.wait(3000);
        dashboardPage.ActionDropDownCheck();

    })

})