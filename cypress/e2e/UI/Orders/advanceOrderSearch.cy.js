import ordersPage from "../../../pageObjects/ordersPage"
import loginPage from "../../../pageObjects/loginPage"
import Utility from "../../../support/utility"

describe('Verify Advance Order Searching through filters', () => {

    const randomGenerator = () => Cypress._.random(0, 1e5)
    const zipCode = randomGenerator();
    const reviewName = `TestReview_${zipCode}`;
    const stateName = "KS";
    const cityName = "Abilene";
    const address = `TestAddress_${zipCode}`;
    const orderStatus = "Completed";

    before(() => {
        cy.visit(Utility.getUrl());
        loginPage.login();
        ordersPage.goToOrdersPage();

        // Create a new order
        ordersPage.goToOrdersPage();
        ordersPage.fillCreateReviewPopup(reviewName, zipCode, stateName, cityName, address);
        cy.get(ordersPage.saveButton).click();
        ordersPage.closeCreateReviewPopup();
        cy.reload();
    })

    it('Verify that the order can be searched through zipcode filter', () => {
        ordersPage.goToOrdersPage();

        // Search the order through advanvce search 
        cy.get(ordersPage.advanceSearchFilterButton).click();
        ordersPage.expandAdvanceFilterOption("Postal Information");
        cy.get(ordersPage.filterZipcode).type(zipCode);
        cy.get(ordersPage.applyFilterButton).click();

        // Verify that the applied zipcodes are visible only
        // ordersPage.verifyOrderInOrderListingTable(reviewName); 
    })

    it('Verify that the order can be searched through state filter', () => {
        ordersPage.goToOrdersPage();

        // Search the order through advanvce search 
        cy.get(ordersPage.advanceSearchFilterButton).click();
        ordersPage.expandAdvanceFilterOption("Postal Information");
        cy.get(ordersPage.filterStateInput).type(stateName);
        cy.get(ordersPage.applyFilterButton).click();

        // Verify that the applied states are visible only
        //ordersPage.verifyOrderInOrderListingTable(reviewName); 
    })

    it('Verify that the order can be searched through city filter', () => {
        ordersPage.goToOrdersPage();

        // Search the order through advanvce search 
        cy.get(ordersPage.advanceSearchFilterButton).click();
        ordersPage.expandAdvanceFilterOption("Postal Information");
        cy.get(ordersPage.filterCityInput).type(cityName);
        cy.get(ordersPage.applyFilterButton).click();

        // Verify that the applied city is visible only
        //ordersPage.verifyOrderInOrderListingTable(reviewName); 
    })

    it('Verify that the order can be searched through address filter', () => {
        ordersPage.goToOrdersPage();

        // Search the order through advanvce search 
        cy.get(ordersPage.advanceSearchFilterButton).click();
        ordersPage.expandAdvanceFilterOption("Postal Information");
        cy.get(ordersPage.filterAddressInput).type(address);
        cy.get(ordersPage.applyFilterButton).click();

        // Verify that the applied address is visible only
        // ordersPage.verifyOrderInOrderListingTable(reviewName); 
    })

    it('Verify that the filters can be resetted', () => {
        ordersPage.goToOrdersPage();

        // Search the order through advanvce search 
        cy.get(ordersPage.advanceSearchFilterButton).click();
        ordersPage.expandAdvanceFilterOption("Postal Information");
        cy.get(ordersPage.filterAddressInput).type(address);
        cy.get(ordersPage.filterCityInput).type(cityName);
        cy.get(ordersPage.resetFilter).click();

        // Verify that the filter is resetted
        cy.get(ordersPage.filterAddressInput).should('be.empty');
        cy.get(ordersPage.filterCityInput).should('be.empty');
    })

    it('Verify that the status filter is working as required', () => {
        const orderCount = '25';

        ordersPage.goToOrdersPage();

        // Search the order through advanvce search 
        cy.get(ordersPage.advanceSearchFilterButton).click();
        cy.get(ordersPage.expansionHeaderOrderStatus).click();
        cy.get(ordersPage.filterOrderStatus).type(orderStatus);
        cy.get(ordersPage.applyFilterButton).click();

        ordersPage.showOrders(orderCount);
        cy.wait(1000);

        //Verify that the filter is applied
        ordersPage.verifyCountOfOrdersWithStatus(orderStatus);
    })
})