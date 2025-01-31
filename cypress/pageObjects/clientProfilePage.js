class clientProfilePage {

    //Variables
    clientProfileURL = "";

    //Locators
    addClientButton = "[data-test-id='client-profile-listing-add-client-btn']"
    addClientPopUp = 'app-client-profile-detail'
    addClientCompanyName = "[data-test-id='add-client-company-name']"
    addClientAddress = "[data-test-id='add-client-address']"
    addClientCityDD = "[data-test-id='filter-city']"
    addClientZipCode = "[data-test-id='add-client-zipCode']"
    addClientEmail = "[data-test-id='add-client-email']"
    addClientPhoneNumber = "[data-test-id='add-client-phone-number']"
    addClientStateDD = '[data-test-id="create-review-state"]'
    addClient_SaveButton = '[data-test-id="add-client-save"]'
    closeAddClientPopupButton = '[data-test-id="add-client-close"]'
    ddValues = '[role="listbox"] mat-option'
    pagination = "[data-test-id = 'pagination-page-btn']"
    paginationPreviousBtn = "[data-test-id = 'pagination-previous-btn']"
    paginationNextBtn = "[data-test-id = 'pagination-next-btn']"
    showClientsDropDown = "mat-select[role='combobox']"
    clientRows = "[class*='mdc-data-table__content'] [class*='mat-mdc-row']"
    clientProfileSearchInput = "input[class*='client-profile-listing__input']"
    clientListingSearchButton = "[data-test-id='client-profile-listing-search-btn']"

    // Methods
    goToClientProfilePage(){
        cy.url().then((urlString) => { 
            this.clientProfileURL = urlString.split('.com')[0]+'.com/client-profile';
            cy.visit(this.clientProfileURL);
            cy.get(this.addClientButton).should('exist');
        })
    }

    addNewClient(companyName, zipCodeVal, clientEmail, city, address, phoneNumber, stateValue){
        cy.get(this.addClientButton).click();
        cy.get(this.addClientPopUp).should('exist');
        cy.get(this.addClientCompanyName).type(companyName);
        cy.get(this.addClientStateDD).click();
        
        const getStateValueXpath = `//*[@role='listbox']//*[text()='${stateValue ? stateValue : "AK"}']`
        cy.xpath(getStateValueXpath).click();
        cy.get(this.addClientCityDD).click();
        cy.get(this.ddValues).first().click();
        cy.get(this.addClientAddress).type(address ? address : "test123");
        cy.get(this.addClientPhoneNumber).type(phoneNumber ? phoneNumber : "912455885278", {force: true});
        cy.get(this.addClientZipCode).type(zipCodeVal ? zipCodeVal : "98623");
        cy.get(this.addClientEmail).type(clientEmail ? clientEmail : "testEmail@company.com");
    }

    closeAddClientPopup(){
        cy.get(this.closeAddClientPopupButton).first().click();
        cy.get(this.addClientPopUp).should('not.exist');
    }

   verifyClientInClientListingTable(companyName){
        const companyNameInClientTableXpath = 
            `//*[contains(@class,'column-company_name')][contains(text(), '${companyName}')]`
        cy.xpath(companyNameInClientTableXpath).should('exist');
    } 

    verifyAllFieldsAreVisibleOnAddNewClient(){
        cy.get(this.addClientButton).click();
        cy.get(this.addClientPopUp).should('exist');
        cy.get(this.addClientCompanyName).should('exist');
        cy.get(this.addClientAddress).should('exist');
        cy.get(this.addClientCityDD).should('exist');
        cy.get(this.addClientZipCode).should('exist');
        cy.get(this.addClientEmail).should('exist');
        cy.get(this.addClientPhoneNumber).should('exist');
        cy.get(this.addClientStateDD).should('exist');
    }

    verifyStatusColumnIsDisplayed(){
        const statusColXpath = '//*[contains(@class, "mat-column-is_active")]//*[contains(text(), "Status")]';
        cy.xpath(statusColXpath).should('exist');
    }

    verifyActionColumnIsDisplayed(){
        const actionsColXpath = '//*[contains(@class, "mat-column-actions") and contains(text(), "Actions")]';
        cy.xpath(actionsColXpath).should('exist');
    }

    verifyClientPopUpIsDisplayed(){
        cy.get(this.addClientButton).click();
        cy.get(this.addClientPopUp).should('exist');
    }

    verifyPaginationIsAppearing(){
        cy.get(this.paginationPreviousBtn).should('exist');
        cy.get(this.paginationNextBtn).should('exist');
        cy.get(this.pagination).should('have.length.greaterThan', 1);
    }

    showClients(clientsCount){
        cy.get(this.showClientsDropDown).click();
        cy.get(this.ddValues).contains(clientsCount).click();
    }

    verifyCountOfClientsShown(countToVerify){
        cy.get(this.clientRows).should('have.length', countToVerify);
    }

    searchClient(clientName){
        cy.get(this.clientProfileSearchInput).type(clientName);
        cy.get(this.clientListingSearchButton).click();
    }

    verifyCountOfClientsShown(countToVerify){
        cy.get(this.clientRows).should('have.length', countToVerify);
    }

} 

module.exports = new clientProfilePage();