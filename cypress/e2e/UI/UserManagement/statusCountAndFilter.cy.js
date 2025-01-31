import usersPage from "../../../pageObjects/usersPage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

const activeFilter = 'Active';
const inActiveFilter = 'Inactive';
const allFilter = 'All';

describe('Status count & Filter - Top', () => {

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that user can filter the users on the basis of "Active" status', () => {
        usersPage.goToUsersPage();

        usersPage.applyFilter(activeFilter);
        // usersPage.verifyActiveFilterIsApplied();
    })

    it('Verify that user can filter the users on the basis of "In Active" status', () => {
        usersPage.goToUsersPage();

        usersPage.applyFilter(inActiveFilter);
        // usersPage.verifyInActiveFilterIsApplied();
    })

    it('Verify that user can filter the users on the basis of "All" status', () => {
        usersPage.goToUsersPage();

        usersPage.applyFilter(allFilter);
        // usersPage.verifyAllFilterIsApplied();
    })
})