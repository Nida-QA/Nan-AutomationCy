import usersPage from "../../../pageObjects/usersPage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Activate/Deactivate user', () => {

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that user can see the activate option in context menu for deactivate users.', () => {
        usersPage.goToUsersPage();

        usersPage.clickOnDisabledUserActionIcon();
        usersPage.verifyActivateBtnOnDisabledUser();
    })

    it('Verify that user can see the deactivate option in context menu for activate users.', () => {
        usersPage.goToUsersPage();

        usersPage.clickOnActiveUserActionIcon();
        usersPage.verifyDeactivateBtnOnActiveUser();
    })

})