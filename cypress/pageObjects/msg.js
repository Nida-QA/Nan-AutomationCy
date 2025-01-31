class msg {

    ordersURL = "";

//Locators
SearchOrder = '//*[@class="order-listing__input-box"]'
SearchIcon = '//*[@data-test-id="order-listing-search-btn"]'
TripleDotOrder = '//*[@class="mat-mdc-menu-trigger order-listing__table-action"]'
EditOptionOrderPage = '//*[@class="mdc-list-item__primary-text"]'
OrderEditMessageButton = '//*[@class="ng-star-inserted"]'
NewMessageButton = '//*[@class="btn-primary ng-tns-c68-63 ng-star-inserted"]'
AssertMessageScreen = '//*[@class="header__text-capitalize"]'
SelectResipientDD = '//*[@id="mat-select-value-11"]'
ResipientName = '//*[@class="mdc-list-item__primary-text"]'
MsgInput = '//*[@data-test-id="msg-input"]'
MsgSendButton = '//*[@data-test-id="msg-send-btn"]'
DeleteMsg = '//mat-icon[@class="mat-icon notranslate mat-mdc-menu-trigger ng-tns-c68-63 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" and text()="more_vert"]' 
DeleteOption = '//*[@class="ng-tns-c68-63"]'
falseButton = '//*[@class="completion-modal__btn-filled ng-star-inserted"]'
FalseSuccessmsg = '//*[@class="toast-top-right toast-container"]'
SideArrow = '//*[@class="mat-icon notranslate chat__collapse-icon material-icons mat-ligature-font mat-icon-no-color"]'
image = '//*[@class="participant-avatar"]'
AdvanceSearch = '//*[@data-test-id="order-listing-filter-btn"]'
StatusField = '//*[@data-test-id="expansion-header-status"]'
StatusBar = '//*[@class="mat-mdc-select-value-text ng-tns-c41-40 ng-star-inserted"]'
SearchInput = '//*[@id="mat-input-5"]'
CompletedOption = '//*[@class="mdc-list-item__primary-text"]'
ApplyFilterBtn = '//*[@data-test-id="filter-applyFilter-btn"]'











//Methods

OrderEditMessage(){
    cy.xpath(this.AdvanceSearch).click();
    cy.xpath(this.StatusField).contains('Status').click();
    cy.wait(3000);
    cy.xpath(this.StatusBar).click({force:true});
    cy.xpath(this.SearchInput).type('Completed');
    cy.xpath(this.CompletedOption).contains('Completed').click().type('{end}').type('{esc}');
    cy.wait(2000);
    cy.xpath(this.ApplyFilterBtn).click();
    cy.wait(2000);

    cy.xpath(this.SearchOrder).click().type('RegressionTest56');
    cy.xpath(this.SearchIcon).click();
    cy.wait(3000)
    cy.xpath(this.TripleDotOrder).first().click(); 
    cy.xpath(this.EditOptionOrderPage).contains('Edit').click();
    cy.wait(6000)
    cy.xpath(this.OrderEditMessageButton).contains('Messages').click();
    cy.wait(2000);
    cy.xpath(this.NewMessageButton).click();
    cy.wait(6000)
    cy.xpath(this.SelectResipientDD).click();
    cy.xpath(this.ResipientName).first().click();
    cy.xpath(this.MsgInput).type('ABCD');
    cy.xpath(this.MsgSendButton).click();
    cy.intercept('GET', '**/*.svg', '');



    //Search for message is pending due to search icon not working NAN-1519 (bug number)
  }
  
  


DeleteMessage(){

    cy.xpath(this.DeleteMsg).first().click();
    cy.xpath(this.DeleteOption).contains('Delete').click();
    cy.xpath(this.falseButton).contains('Done').click();
    cy.xpath(this.FalseSuccessmsg).should('exist');
}





}
module.exports = new msg();
