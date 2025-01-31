import usersPage from "../../../pageObjects/usersPage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('archived user', () => {

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify that system is showing the Archive user option in the context menu.', () => {
        usersPage.goToUsersPage();

        usersPage.clickOnActiveUserActionIcon();
        usersPage.verifyArchiveBtn();
    })

    it('Verify that system is showing the Archive user option in the context menu for active user', () => {
        usersPage.goToUsersPage();

        usersPage.SelectActiveStatus();
        usersPage.verifyArchiveBtn();
    })

    it('Verify that system is showing the Archive user option in the context menu for disabled user', () => {
        usersPage.goToUsersPage();

        usersPage.SelectDisabledStatus();
        // usersPage.clickOnActiveUserActionIcon();
        usersPage.verifyArchiveBtn();
    })

    it('Verify that user is able to archived softly', () => {
        usersPage.goToUsersPage();
        usersPage.clickOnActiveUserActionIcon();
        usersPage.ArchivedUser();
    })


})