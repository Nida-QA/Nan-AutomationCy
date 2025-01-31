const samplePDF_FilePath = 'cypress/fixtures/doc.pdf';
const loanNumberValue = 2;
const borrowerNameFieldValue = "AutoTest";
class ordersPage {

    //Variables
    ordersURL = ""

    //Locators
    createReviewButton = '//button[@class="order-listing__btn-filled ng-star-inserted"]'
    orderNumberField = '[data-test-id="create-review-orderNo"]'
    selectClientDD = '[data-test-id="create-review-client"]'
    addressField = '[data-test-id="create-review-address"]'
    cityField = '[data-test-id="filter-city"]'
    stateDD = '[data-test-id="create-review-state"]'
    zipCodeField = '[data-test-id="create-review-zipCode"]'
    uploadFile = '[data-test-id="create-review-uploadFile"]'
    cancelButton = '[data-test-id="create-review-close"]'
    saveButton = '[data-test-id="create-review-save"]'
    createReviewPopup = 'app-create-review'
    ddValues = '[role="listbox"] mat-option'
    createReviewCloseButton = '[data-test-id="create-review-close"]'
    orderNamesInOrderTable = '[data-test-id*="order-row-"] [class*="column-order_number"]'
    orderListingTable = 'table[class*="order-listing__table"]'
    showOrderDropDown = '[id="mat-select-0"]'
    DDValues = '[class="mdc-list-item__primary-text"]'
    orderRows = '[data-test-id*="order-row-"]'
    rowCheckboxes = '[data-test-id*="order-row-"] input[id*="mat-mdc-checkbox-"]'
    actionsButtons = '[data-test-id*="order-row-"] [class*="order-listing__table-action"]'
    orderSearchBar = 'input[class*="order-listing__input"]'
    orderListingSearchBtn = '[data-test-id="order-listing-search-btn"]'
    noRecords = '[class*="no-records"]'
    advanceSearchFilterButton = '[data-test-id= "order-listing-filter-btn"]'
    applyFilterButton = '[data-test-id= "filter-applyFilter-btn"]'
    filterZipcode = '[data-test-id = "filter-zipCode"]'
    filterStateInput = '[data-test-id="filter-state"]'
    filterCityInput = '[data-test-id="filter-city"]'
    filterAddressInput = '[data-test-id="filter-address"]'
    resetFilter = '[data-test-id="filter-reset-btn"]'
    expansionHeaderOrderStatus = '[data-test-id= "expansion-header-status"]'
    filterOrderStatus = '[data-test-id="expansion-header-status"]'
    filterOrderStatusField = "//*[@data-test-id='expansion-header-status']//parent::*//mat-select"
    archiveOrderButton = "//*[@role='listbox']//*[@ng-reflect-value='Completed']//mat-pseudo-checkbox"
    loader = "[class='ngx-spinner ng-star-inserted']"
    RandomClick = "[class='order-filters__filter-btns']"
    statusDropDown = "#mat-select-value-5"
    statusSearch = "#mat-input-5"
    selectClientOnReport = "[data-test-id='create-review-client-on-report']"
    loanNumberField = "[data-test-id = 'create-review-loanNo']"
    loanNumberBox = "//*[@data-test-id='create-review-loanNo']//parent::div"
    loanTypeDD = "[data-test-id = 'loan-type']"
    orderPurposeTypeDD = "[data-test-id = 'order-purpose-type']"
    borrowerNameField = "[data-test-id = 'create-review-borrower-name']"

    // Methods
    goToOrdersPage() {
        cy.url().then((urlString) => {
            this.ordersURL = urlString.split('.com')[0] + '.com/orders';
            cy.visit(this.ordersURL);
            cy.xpath(this.createReviewButton).should('exist');
        })
    }

    fillCreateReviewPopup(orderName, zipCodeVal, stateValue, city, address, filePath) {
        cy.wait(2000)
        cy.xpath(this.createReviewButton).contains(' Create Review').click();
        cy.get(this.createReviewPopup).should('exist');
        cy.get(this.orderNumberField).type(orderName);
        cy.get(this.stateDD).click();

        const getStateValueXpath = `//*[@role='listbox']//*[text()='${stateValue ? stateValue : "AK"}']`
        cy.xpath(getStateValueXpath).click();
        cy.get(this.cityField).click();

        var getCityValueXpath
        if (city) {
            getCityValueXpath = `//*[@role='listbox']//*[text()='${city ? city : "AK"}']`
        }
        else {
            getCityValueXpath = "(//*[@role='listbox']//mat-option)[1]";
        }
        cy.xpath(getCityValueXpath).click();

        cy.get(this.addressField).type(address ? address : "test123");
        cy.get(this.zipCodeField).type(zipCodeVal ? zipCodeVal : "98623");
        cy.get(this.selectClientDD).click();
        cy.get(this.ddValues).first().click();

        cy.get(this.selectClientOnReport).click();
        cy.get(this.ddValues).first().click();

        cy.get(this.borrowerNameField).click();
        cy.get(this.borrowerNameField).type(borrowerNameFieldValue);

        cy.get(this.loanTypeDD).click();
        cy.get(this.ddValues).first().click();

        // cy.xpath(this.loanNumberBox).click();
        cy.get(this.loanNumberField).click({ force: true });
        cy.get(this.loanNumberField).type(loanNumberValue);

        cy.get(this.orderPurposeTypeDD).click();
        cy.get(this.ddValues).first().click();

        cy.get(this.uploadFile).selectFile(filePath ? filePath : samplePDF_FilePath, { force: true });
    }

    closeCreateReviewPopup() {
        cy.get(this.createReviewCloseButton).first().click();
        cy.get(this.createReviewPopup).should('not.exist');
    }

    verifyOrderInOrderListingTable(orderNameToGet) {
        const orderNamesInOrderTableXpath =
            `//span[@class="order-click ng-star-inserted"][contains(text(), '${orderNameToGet}')]`
        cy.xpath(orderNamesInOrderTableXpath).should('exist');
    }

    verifyOrderListTableIsDsiplayed() {
        cy.get(this.orderListingTable).should('exist');
    }

    showOrders(orderCount) {
        cy.get(this.showOrderDropDown).click();
        cy.get(this.DDValues).contains(orderCount).click();
    }

    verifyCountOfOrdersShown(countToVerify) {
        cy.get(this.orderRows).should('have.length', countToVerify);
    }

    selectOrder() {
        cy.get(this.rowCheckboxes).first().check().should('be.checked');
    }

    editOrder() {
        cy.get(this.actionsButtons).first().click();
        cy.get(this.DDValues).contains('Preview').click();
        cy.url().should('include', 'order-review/');
    }

    searchOrder(orderName) {
        cy.get(this.orderSearchBar).type(orderName);
        cy.get(this.orderListingSearchBtn).click();
    }

    verifyNoRecordsAreDisplayed() {
        cy.get(this.noRecords).should('exist');
    }

    expandAdvanceFilterOption(filterName) {
        const advFilterXpath = `//*[contains(@id,'mat-expansion-panel-header-')]//*[contains(text(), '${filterName}')]`
        cy.xpath(advFilterXpath).click();
    }

    verifyCountOfOrdersWithStatus(statusValue) {
        // cy.scrollTo('top')
        const orderStatusesXpath =
            // `//*[contains(@data-test-id,'order-row-')]//*[contains(@class,'column-status')]//*[contains(text(), '${statusValue}')]`
            `//td[contains(@class,'mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted')]//*[contains(text(),'${statusValue}')]`
        //  `//span[@class="mat-mdc-select-min-line ng-tns-c23-53 ng-star-inserted"]`
        //   cy.log('cy.get(this.orderRows).then(listOfActualRows => {
        //     cy.xpath(orderStatusesXpath).then(listOfRows =>{
        //         expect(listOfRows.text).to.equal(listOfActualRows.length);
        //     }))
        const orderRowcount = cy.get(this.orderRows)
        const listOfActualRows = orderRowcount.its('length')
        cy.log(listOfActualRows)
        // const expRowCount = cy.xpath(orderStatusesXpath)
        // expRowCount.then(listOfRows) 
        // cy.log(expRowCount)
        // expect(listOfRows.text).to.equal(listOfActualRows.length);

        cy.scrollTo('top')
        // })
    }

    selectOrderStatusCompletedFromFilter(statusVal1, statusVal) {
        const orderStatusFilterXpath = `//*[@ng-reflect-value='${statusVal1}']//mat-pseudo-checkbox`
        cy.get(this.orderRows).first().should('exist');
        // cy.xpath(this.filterOrderStatusField).click();
        cy.get(this.statusDropDown).click()
        cy.scrollTo('top')
        cy.get(this.statusSearch).type(statusVal1)
        cy.scrollTo('top');
        cy.xpath(orderStatusFilterXpath).click().type('{end}').type('{esc}');
        //cy.get(this.applyFilterButton).click()
    }

    orderClickApplyFilterButton() {
        cy.get(this.applyFilterButton).click()
    }

    /*  verifyArchiveOrderButtonIsDisabled(){
          cy.xpath(this.archiveOrderButton).should('be.disabled');
      }
       cy.get(this.loader).should('not.be.visible');
          cy.get(this.actionsButtons).eq(2).click();
      */

}

module.exports = new ordersPage();