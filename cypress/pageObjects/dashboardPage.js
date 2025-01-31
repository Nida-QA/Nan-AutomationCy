
class dashboardPage {

    //Locators
    openMenu = '[data-test-id="menu-open"]'
    logout = '//*[text()="Logout"]'
    PerformaceOverview = '//*[@class="performance-overview__heading"]'
    CompleteOrderDashboard = '//*[@class="chip chip--completed ng-star-inserted"]'
    PerDayOrderCount = '//*[@class="apexcharts-text apexcharts-xaxis-label "]'
    // DropDown = '//*[@class="mat-mdc-select-min-line ng-tns-c21-5 ng-star-inserted"]'
    DropDown='//mat-select[@role="combobox"]'
    // LastMonthValue = '//span[@class="mdc-list-item__primary-text" and contains(text(),"Last Week")]'
    LastMonthValue = '//span[@class="mdc-list-item__primary-text"]'
    TopClients = '//*[@class="top-clients"]'
    Status = '//*[@class="dash-status__header"]'
    Order = '//*[@class="order-listing__header"]'
    OrderBody = '//*[@class="order-listing__body"]'
    ViewAll = '//*[@ng-reflect-router-link="orders"]'
    sort = '//*[@class="default-sort ng-star-inserted"]'

   // _________________________________________________________________________________________________________________________________________________________

   //Locator Reviewer
   HeaderAsserReviewer = '//*[@class="header__text-capitalize"]'
   Image = '//*[@class="header__notification-link"]'
   MenuIcon = '//*[@class="mat-icon notranslate header__collapse-icon material-icons mat-ligature-font mat-icon-no-color"]'
   SelectedItemDashboard = '//*[@class="list-item-label"]'

   //___________________________________________________________________________________________________________________________________________________________
   //Locator Manager
   DasboardHeaderMan = '//*[@class="header__text-capitalize"]'
   OrdersCompletedMan = '//*[@class="text"]'
   RecentOrderMan = '//*[@class="order-listing__head-text home-order__head-text"]'
   OrderColMan = '//*[@class="mat-sort-header-content ng-tns-c120-6"]'
   AddressColMan = '//*[@class="mat-sort-header-content ng-tns-c120-7"]'
   OrderStatusColMan = '//*[@class="mat-sort-header-content ng-tns-c120-8"]'
   RevNameColMan = '//*[@class="mat-sort-header-content ng-tns-c120-11"]'
   ClientNameColMan = '//*[@class="mat-sort-header-content ng-tns-c120-12"]'
   TopClientMan = '//*[@class="top-clients__header"]'
   StatusDashMan = '//*[@class="dash-status__header"]'
   OrderMenuButton = '//*[@class="list-item-label"]'
   OrderHeaderManagerAsser = '//*[@class="order-listing__head-text"]'
   AdvanceOrderIcon = '//*[@class="order-listing__filter-img"]'
   AdvancePostalInfo = '//*[@data-test-id="expansion-header-postal"]'
   PostalInfoAddress = '//*[@data-test-id="filter-address"]'
   PostalStateFilter = '//*[@data-test-id="filter-state"]'
   StateOption = '//*[@ng-reflect-value="NY"]' 
   PostalCity = '//*[@data-test-id="filter-city"]'
   CityOption = '//*[@ng-reflect-value="Bronx"]' 
   PostalZipCode = '//*[@data-test-id="filter-zipCode"]' 
   AdvanceApplyFilterButton = '//*[@class="order-filters__filter-btn-outline"]' 
   AdvanceReviewerFilter = '//*[@id="mat-expansion-panel-header-1"]' 
   AdvanceReviewerFilterField   = '//*[@id="mat-select-4"]'
   ReviewFilterOption = '//*[@ng-reflect-value="2f58829d-867f-4182-bfef-788d87"]'
   AdvanceStatus = '//*[@id="mat-expansion-panel-header-2"]'
   AdvanceStatusField = '//*[@id="mat-select-6"]' 
   AdvanceStatusOption = '//*[@class="mdc-list-item__primary-text"]'
   ResetButton = '//*[@data-test-id="filter-reset-btn"]'
   AdvanceClient = '//*[@id="mat-expansion-panel-header-3"]'
   AdvanceClientField = '//*[@class="mat-expansion-panel order-filters-panel ng-tns-c115-55 ng-star-inserted"]'
   ClientOption = '//*[@ng-reflect-value="157a9aaf-5e44-453d-964d-fd1e02"]'
   OrderSearchMain = '//*[@class="order-listing__input-box"]'
   OrderSearchButton = '//*[@data-test-id="order-listing-search-btn"]'
   CSVButton = '.order-listing__btn-outlined'
   CreateReview = '//*[@data-test-id="order-listing-createReview-btn"]'
   OrderNumber = '//*[@data-test-id="create-review-orderNo"]' 
   SelectClient = '//*[@data-test-id="create-review-client"]'
   SelectClientOption = '//*[@id="mat-option-2033"]'
   CreateReviewAddress = '//*[@data-test-id="create-review-address"]'
   CreateReviewState = '//*[@data-test-id="create-review-state"]'
    CC = '//*[@class="mat-mdc-option mdc-list-item ng-tns-c22-188 ng-star-inserted"]'
   CreateReviewStateOption = '//*[@id="mat-option-197"]' 
   CreateReviewCity = '//*[@data-test-id="filter-city"]'
   CreateReviewCityOption = '//*[@class="mdc-list-item__primary-text"]'
   CreateReviewZipCode = '//*[@id="mat-mdc-form-field-label-18"]'
   uploadFile = '//*[@class="heading"]'
   CreateReviewSaveButton = '//*[@data-test-id="create-review-save"]'
   GetNextButton = 'button[data-test-id="order-listing-createReview-btn"]'
   EditDots = '//*[@class="mat-mdc-menu-trigger order-listing__table-action"]'
   EditOption = '//*[@class="mdc-list-item__primary-text"]'
   PreviewOption = '//*[@class="mdc-list-item__primary-text"]'
   ActionDD = '//*[@class="mat-mdc-menu-trigger"]'

    // Methods
    goToOrdersPage(){
        cy.url().then((urlString) => { 
            this.ordersURL = urlString.split('.com')[0]+'.com/orders';
            cy.visit(this.ordersURL);
            cy.get(this.createReviewButton).should('exist');
        })
    }




    openLeftMenu() {
        cy.get(this.openMenu).click();
    }
    
    clickLogout() {
        cy.xpath(this.logout).click();
    }

    PerformanceAssertion(){
        cy.xpath(this.PerformaceOverview).contains('Performance Overview').should('exist');    
    }
    TotalCompleteOrderAssertion(){
        cy.xpath(this.CompleteOrderDashboard).contains('Completed').should('exist');
    }
    TotalPerDayOrderCountAssertion(){
        cy.wait(3000);
        cy.xpath(this.DropDown).click({force:true});
        cy.xpath(this.LastMonthValue).contains('Last Month').click();
        cy.wait(3000);
         const today = new Date();
         const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
         const options = { month: 'short', day: '2-digit' };
         const formattedDate = lastMonth.toLocaleDateString('en-US', options);
        cy.xpath(this.PerDayOrderCount).contains(formattedDate).should('exist');
    }
FilterDashboard(){
        cy.xpath(this.DropDown).click({force:true});
        cy.xpath(this.LastMonthValue).contains('Last Month').click();
}

TopClientAsser(){
    cy.xpath(this.TopClients).should('exist');
}


StatusHeaderAsser(){
    cy.xpath(this.Status).should('exist');

}
OrderHeaderAsser(){
    cy.xpath(this.Order).should('exist');
}

NoOfRowsOrder(){
    cy.xpath(this.OrderBody)
    .find("tr")
    .then((row) => {
      cy.log(row.length);
    });

}

ViewallOrderButtonAsser(){

    cy.xpath(this.ViewAll).contains('View All').should('exist');
}
SortButton(){
    cy.xpath(this.sort).first().click();
}

//____________________________________________________________________________________________________________________
//Reviewer Dashboard Methods

DasboardHeaderAsser(){
    cy.xpath(this.HeaderAsserReviewer).should('exist');
}
ImageCheckAsser(){
    cy.xpath(this.Image).should('exist');
}
MenuButton(){
    cy.xpath(this.MenuIcon).click();
    cy.wait(2000)

}
HoveCheckAsser(){
    cy.xpath(this.SelectedItemDashboard).contains('Dashboard').should('exist');
}
//________________________________________________________________________________________________________________________________
//Manager Methods
HeaderAsserMan(){
    cy.xpath(this.DasboardHeaderMan).contains('Dashboard').should('exist');
}
ManagerDashAsser(){
    cy.xpath(this.OrdersCompletedMan).contains('Orders Completed Today').should('exist');
    cy.wait(2000)
    cy.xpath(this.OrdersCompletedMan).contains('Revision Sent').should('exist');
    cy.wait(2000)
    cy.xpath(this.OrdersCompletedMan).contains('Turn Time').should('exist');
}

RecentOrderAsser(){
    cy.xpath(this.RecentOrderMan).contains('Recent Orders').should('exist');
    cy.wait(3000)
    cy.xpath(this.OrderColMan).contains(' Order # ').should('exist');
    cy.wait(3000)
    cy.xpath(this.AddressColMan).contains(' Address 1 ').should('exist');
    cy.wait(3000)
    cy.xpath(this.RevNameColMan).contains(' Reviewer Name ').should('exist');
    cy.wait(3000)
    cy.xpath(this.ClientNameColMan).contains(' Client Name ').should('exist');

}
TopClient_StatusAsser(){
    cy.xpath(this.TopClientMan).contains('Top Clients').should('exist');
    cy.wait(2000)
    cy.xpath(this.StatusDashMan).contains('Status').should('exist');

}

OpenMenuIconButton(){

    cy.xpath(this.MenuIcon).click();
    cy.xpath(this.OrderMenuButton).contains('Orders').click();
    cy.wait(3000)
    cy.xpath(this.OrderHeaderManagerAsser).contains('Orders').should('exist');
}

AdvanceSearchCheckPostalInfo(){
cy.xpath(this.AdvanceOrderIcon).click();
cy.wait(2000)
cy.xpath(this.AdvancePostalInfo).click();
cy.xpath(this.PostalInfoAddress).type('1234');
cy.wait(2000);
cy.xpath(this.PostalStateFilter).type('NY');
cy.xpath(this.StateOption).click();
cy.wait(2000)
cy.xpath(this.PostalCity).type('Bronx');
cy.xpath(this.CityOption).click();
cy.wait(2000);
cy.xpath(this.PostalZipCode).type('38655');
cy.xpath(this.AdvanceApplyFilterButton).contains('Apply Filter').click();
cy.wait(4000)
cy.xpath(this.ResetButton).click();
}

/*AdvanceSearchCheckReviewer(){
cy.xpath(this.AdvanceReviewerFilter).click();
cy.wait(3000);
cy.xpath(this.AdvanceReviewerFilterField).type('ali');
cy.wait(2000);
cy.xpath(this.ReviewFilterOption).click();
cy.wait(2000);
cy.xpath(this.AdvanceApplyFilterButton).click().type('{end}').type('{esc}');
cy.wait(4000)
cy.xpath(this.ResetButton).click();
}

AdvanceSearchCheckStatus(){
cy.scrollTo('top');
cy.xpath(this.AdvanceStatus).click();
cy.wait(2000);
cy.xpath(this.AdvanceStatusField).click().type('pro');
cy.wait(2000);
cy.xpath(this.AdvanceStatusOption).contains('Processing').click();
cy.wait(2000);
cy.xpath(this.AdvanceApplyFilterButton).contains('Apply Filter').click();
cy.wait(4000)
cy.xpath(this.ResetButton).click();
}

AdvanceSearchCheckClient(){
    cy.xpath(this.AdvanceClient).click();
    cy.wait(2000);
cy.xpath(this.AdvanceClientField).type('QA');
cy.xpath(this.ClientOption).click();
cy.xpath(this.AdvanceApplyFilterButton).contains('Apply Filter').click();
cy.wait(4000)

} */


SearchMainCheck(){

    cy.xpath(this.OrderSearchMain).type('b');
    cy.wait(2000);
    cy.xpath(this.OrderSearchButton).click();
    cy.wait(3000)

}

ExportCSVFile(){

    cy.get(this.CSVButton).contains(' Export CSV').click();
}

CreateReviewManager(name01, filePath){
cy.xpath(this.CreateReview).contains('Create Review').click();
cy.xpath(this.OrderNumber).type(name01);
cy.xpath(this.SelectClient).type('QA');
cy.wait(2000)
cy.xpath(this.SelectClientOption).click();
cy.wait(1000)
cy.xpath(this.CreateReviewAddress).type('ABCD');
cy.xpath(this.CreateReviewState).click();
cy.xpath(this.CC).first().click();
cy.wait(1000)
//cy.xpath(this.CreateReviewStateOption).click();
//cy.wait(1000)
cy.xpath(this.CreateReviewCity).type('Arden');
cy.wait(1000)
cy.xpath(this.CreateReviewCityOption).click();
cy.wait(1000)
cy.xpath(this.CreateReviewZipCode).type('78522');
cy.wait(2000)
cy.xpath(this.uploadFile).attachFile(filePath);
cy.wait(2000)
cy.xpath(this.CreateReviewSaveButton).click();

}

NextButtonCheck(){

    cy.get(this.GetNextButton).contains('Get Next').should('exist');
}


EditButtonCheck(){
    cy.xpath(this.OrderSearchMain).click();
    cy.xpath(this.OrderSearchMain).type('80728');
    cy.wait(2000);
    cy.xpath(this.OrderSearchButton).click();
    cy.wait(5000)
    cy.xpath(this.EditDots).click();
    cy.xpath(this.EditOption).contains('Edit').click();
}

PreviewButtonCheck(){

    cy.xpath(this.OrderSearchMain).type('80728');
    cy.wait(2000);
    cy.xpath(this.OrderSearchButton).click();
    cy.wait(5000)
    cy.xpath(this.EditDots).click();
    cy.xpath(this.PreviewOption).contains('Preview').click();
}

ActionDropDownCheck(){
    cy.xpath(this.OrderSearchMain).type('80728');
    cy.wait(2000);
    cy.xpath(this.OrderSearchButton).click();
    cy.wait(5000)
    cy.xpath(this.EditDots).click();
    cy.xpath(this.EditOption).contains('Edit').click();
    cy.wait(2000)
    cy.xpath(this.ActionDD).contains('Actions').click();

}


} 


module.exports = new dashboardPage();