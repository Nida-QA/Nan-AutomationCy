import ordersPage from "../../../../pageObjects/ordersPage"
import loginPage from "../../../../pageObjects/loginPage"
import msg from "../../../../pageObjects/msg"
import Utility from "../../../../support/utility"

describe('Verify that the user can able to send a message', () => {

    before(() => {
        // Navigate to the particular env 
        cy.visit(Utility.getUrl());
        loginPage.login();
    })


    it('Verify that user was able to see the message page in order edit and able to send a message', () => {
        cy.wait(3000)
        ordersPage.goToOrdersPage();
        cy.wait(5000)
        msg.OrderEditMessage();
    })

    it('Verify that user was able to delete message from message chat', () => {
        cy.wait(3000)
        ordersPage.goToOrdersPage();
        cy.wait(5000)
        msg.OrderEditMessage();
        cy.wait(3000)
        msg.DeleteMessage();
    })

})