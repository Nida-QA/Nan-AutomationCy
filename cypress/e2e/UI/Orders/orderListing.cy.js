import ordersPage from "../../../pageObjects/ordersPage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify Order Listing', () => {

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
    })

    it('Verify order listing table is displayed', () => {
        ordersPage.goToOrdersPage();
        ordersPage.verifyOrderListTableIsDsiplayed();
    })

    it('Verify count of orders displayed as per pagination', () => {
        let orderCount = 25;
        ordersPage.showOrders(orderCount);
        ordersPage.verifyCountOfOrdersShown(orderCount);

        orderCount = 25;
        ordersPage.showOrders(orderCount);
        ordersPage.verifyCountOfOrdersShown(orderCount);
    })

    it('Verify an order can be selected for further actions', () => {
        ordersPage.selectOrder();
        ordersPage.editOrder();
    })
})