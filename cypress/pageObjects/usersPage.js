class usersPage {

    //Variables
    usersURL = "";

    //Locators
    addUserButton = '[data-test-id="order-listing-createReview-btn"]'
    disabledUserActionsIcons = "//*[@class='mat-icon notranslate mat-mdc-menu-trigger order-listing__table-action material-icons mat-ligature-font mat-icon-no-color']"
    enabledUsersActionsIcons = "//*[@class='mat-icon notranslate mat-mdc-menu-trigger order-listing__table-action material-icons mat-ligature-font mat-icon-no-color')]"
    activateUserBtn = "//*[@class='mdc-list-item__primary-text']"
    deactivateUserBtn = "//*[contains(@id, 'mat-menu-panel-')]//*[contains(text(), 'Deactivate')]"
    archiveUserBtn = "//*[contains(@id, 'mat-menu-panel-')]//*[contains(text(), 'Archive')]"
    activestatus = '//*[@class="mdc-tab__text-label"]'
    disabledstatus = '//*[@id="mat-tab-label-0-2"]/span[2]/span'
    ArchivePopupBtn = "//*[@Class ='completion-modal__btn-filled ng-star-inserted']"
    ArchivePopupAssertion = "//*[@Class ='mat-mdc-dialog-content mdc-dialog__content']"


    // Methods
    goToUsersPage(){
        cy.url().then((urlString) => { 
            this.usersURL = urlString.split('.com')[0]+'.com/users';
            cy.visit(this.usersURL);
            cy.get(this.addUserButton).should('exist');
        })
    }

    clickOnDisabledUserActionIcon(){
        cy.xpath(this.disabledUserActionsIcons).first().click();
    }

    clickOnActiveUserActionIcon(){
        cy.wait(3000)
        cy.xpath(this.disabledUserActionsIcons).first().click();
    }

    verifyActivateBtnOnDisabledUser(){
        cy.xpath(this.activateUserBtn).contains('Archive').should('exist');
    }

    verifyDeactivateBtnOnActiveUser(){
        cy.xpath(this.deactivateUserBtn).should('exist');
    }

    verifyActivateBtnIsNotPresent(){
        cy.xpath(this.activateUserBtn).should('not.exist');
    }

    applyFilter(filter){
        const filterXpath = `//*[contains(@class, 'mat-mdc-tab-list')]//*[contains(text(), '${filter}')]`;
        cy.xpath(filterXpath).click();
    }

    verifyActiveFilterIsApplied(){
        cy.wait(1000)
        cy.xpath(this.enabledUsersActionsIcons).first().should('exist')
    }

    verifyInActiveFilterIsApplied(){
        cy.wait(1000)
        cy.xpath(this.disabledUserActionsIcons).first().should('exist');
        cy.xpath(this.enabledUsersActionsIcons).should('not.exist');
    }

    verifyAllFilterIsApplied(){
        cy.xpath(this.enabledUsersActionsIcons).first().should('exist');
        cy.xpath(this.disabledUserActionsIcons).first().should('exist');
    }

    verifyArchiveBtn(){
        cy.wait(3000)
        cy.xpath(this.disabledUserActionsIcons).first().click();
        cy.wait(3000)
        cy.xpath(this.archiveUserBtn).should('exist');;
   } 

   SelectActiveStatus(){
    cy.wait(3000)
    cy.xpath(this.activestatus).contains('Active').click();
   }

   SelectDisabledStatus(){
    cy.wait(1000)
    cy.xpath(this.disabledstatus).click();
   }

   ArchivedUser(){
    cy.wait(1000)
    cy.xpath(this.archiveUserBtn).should('exist').click();
    cy.wait(3000)
    cy.xpath(this.ArchivePopupBtn).contains('Archive').click();

   }


} 

module.exports = new usersPage();