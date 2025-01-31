class rulesEnginePage {

    //Variables
    RulesPageURL = "";

    //Locators - RulesEngine page main
    addWordButton = '[data-test-id="rules-create-btn"]'
    //Locators - Restricted word page
    addWordRestrcited = '//*[@data-test-id="rules-create-btn"]'
    ToggleButton = '//*[@class="switch"]'
    addButtonPopup = '#mat-mdc-dialog-title-1'
    PopupWordField = '//*[@data-test-id="add-rule-name"]'
    PopupCategory = '//*[@data-test-id="create-restricted-word"]'
    PopupAdd = '//*[@data-test-id="add-rule-save"]'
    categoryInappropriate = 'Inappropriate'
    categorySituational = 'Situational'
    Inappropriate = '//*[@id="mat-option-1228"]'
    Situational = '//*[@id="mat-option-1229"]'
    SearchRestrictedWord = '//*[@placeholder="Search code or description"]'
    SearchButton = '//*[@data-test-id="client-profile-listing-search-btn"]'
    StatusFilter = '//*[@id="mat-select-4"]'
    ActiveStatus = 'div[role="listbox"] mat-option[value="active"]'
    InActiveStatus = 'div[role="listbox"] mat-option[value="inactive"]'
    ShowResWordDropdown = '//*[@id="mat-select-value-13"]/span/span'
    DDValues = '[class="mdc-list-item__primary-text"]'
    //wordRows = '[class="mdc-data-table__content"]'
    EditWord = '//*[@class="mdc-list-item__primary-text"]'
    OpenEdit = '//*[@class="mat-icon notranslate mat-mdc-menu-trigger rules__table__table-action material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"]'
    updateButton = '//*[@data-test-id="add-rule-save"]'

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //ACI Locaters
    ACIAddWord = '//*[@data-test-id="rules-create-btn"]'
    ACICodeHeading = '//*[@class="mat-sort-header-content ng-tns-c119-16"]'
    ACIDescriptionHeading = '//*[@class="mat-sort-header-content ng-tns-c119-17"]'
    ACIStatusHeading = '//*[@class="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-status mat-column-status ng-star-inserted"]'
    ACISearchField = '//*[@placeholder="Search code or description"]'
    ACISearchIcon = '//*[@data-test-id="client-profile-listing-search-btn"]'
    ACIStatusDD = '//*[@id="mat-select-value-1"]'
    ACIStatusActive = "//*[@id='mat-option-1']"
    ACIStatusInActive = "//*[@id='mat-option-2']"

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //NAN STANDARD CONFIGURATION Locaters

    NANConfigSearchbar = '//*[@placeholder="Search code or description"]'
    NANAddRuleButton = '//*[@data-test-id="rules-create-btn"]'
    RuleCodeField = '//*[@data-test-id="add-rule-name"]'
    RuleDescField = '//*[@data-test-id="add-rule-desc"]'
    TargetFieldDD = '//*[@formcontrolname="target_field"]'
    TargetDDValue = '//*[@class="mdc-list-item__primary-text"]'
    ExpressionField = '//*[@id="mat-input-4"]'
    AddButton = '//*[@data-test-id="add-rule-save"]'
    NANStatusDD = '//*[@id="mat-select-value-3"]'
    NANStatusActive = "//*[@id='mat-option-4']"
    NANStatusInActive = "//*[@id='mat-option-5']"

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Manual Findings Locators
    ManualFindingOption = '//*[@class="mdc-tab__text-label"]'
    addGroup = '//*[@data-test-id="rules-create-btn"]'
    MgfCode = '//*[@data-test-id="add-rule-name"]'
    MgfDesc = '//*[@data-test-id="add-rule-desc"]'
    AddButton = '//*[@data-test-id="add-rule-save"]'
    SGroup = '//*[@class="rules__input-box"]'
    // SearchGroup = '//input[@class="rules__input ng-pristine ng-valid ng-touched"]'
    SearchGroup = '//div[@class="rules__single-input-wrap"]//div//input'
    SearchIcon = '//*[@data-test-id="client-profile-listing-search-btn"]'
    EditDot = '//*[@class="mat-icon notranslate mat-mdc-menu-trigger rules__table__table-action material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"]'
    EditOption = '//*[@class="mdc-list-item__primary-text"]'
    DesAsser = '//*[@class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-description mat-column-description ng-star-inserted"]'
    DeletePopup = '//*[@class="completion-modal__btn-filled ng-star-inserted"]'
    OrderSearch = '//div[@class="order-listing__input-box"]//input'
    icon = '//*[@data-test-id="order-listing-search-btn"]'
    OrderSearchActionDots = '//*[@class="mat-mdc-menu-trigger order-listing__table-action"]'
    OrderAddFinding = '//*[@class="findings-view__btn-add ng-star-inserted"]'



    //Methods

    goToRulePage() {
        cy.url().then((urlString) => {
            this.RuleURL = urlString.split('.com')[0] + '.com/rules';
            cy.visit(this.RuleURL);
            cy.wait(2000);
        })
    }


    goToRestrictedPage() {
        cy.get('.rules__tab')
            .contains('Restricted Words')
            .click({ force: true });
    }

    AddButtonRestrictedCheck() {
        cy.xpath(this.addWordRestrcited).should('exist');
    }

    ToggleButtonRestrictedCheck() {
        cy.xpath(this.ToggleButton).should('exist');
    }

    AddWordPopup(name01) {
        cy.xpath(this.addWordRestrcited).click();
        cy.xpath(this.PopupWordField).type(name01);
        cy.xpath(this.PopupCategory).type(this.categoryInappropriate);
        cy.xpath(this.Inappropriate).click();
        cy.xpath(this.PopupAdd).click();
        cy.xpath(this.SearchRestrictedWord).type(name01);
        cy.xpath(this.SearchButton).click();
    }

    SetToggleActiveOrInActive() {
        cy.xpath(this.SearchRestrictedWord).type('zz');
        cy.xpath(this.SearchButton).click();
        cy.wait(2000);
        cy.xpath(this.ToggleButton).click({ force: true });
        cy.wait(2000);
        cy.xpath(this.ToggleButton).click({ force: true })
    }

    StatusFilterActive() {
        cy.xpath(this.StatusFilter).click();
        cy.get(this.ActiveStatus).click();
        cy.wait(3000);
    }

    StatusFilterInActive() {
        cy.xpath(this.StatusFilter).click();
        cy.get(this.InActiveStatus).click();
        cy.wait(3000);
    }

    showRestrictedWords(wordCount) {
        cy.scrollTo('bottom');
        cy.wait(1000)
        cy.xpath(this.ShowResWordDropdown).click({ force: true });
    }
    /*  verifyCountOfWordsShown(countToVerify){
          cy.xpath(this.wordRows).should('have.length', countToVerify);
      }*/

    EditRestrictedWord(name01) {
        cy.xpath(this.addWordRestrcited).click();
        cy.xpath(this.PopupWordField).type(name01);
        cy.wait(2000)
        cy.xpath(this.PopupCategory).type(this.categorySituational);
        cy.xpath(this.Situational).click();
        cy.xpath(this.PopupAdd).click();
        cy.wait(2000)
        cy.xpath(this.SearchRestrictedWord).type(name01);
        cy.xpath(this.SearchButton).click();
        cy.wait(2000)
        cy.xpath(this.OpenEdit).contains('more_vert').click();
        cy.xpath(this.EditWord).contains('Edit').click();
        cy.xpath(this.PopupCategory).clear().type(this.categoryInappropriate);
        cy.xpath(this.Inappropriate).click();
        cy.xpath(this.updateButton).click();
        cy.wait(3000)
    }

    //_______________________________________________________________________________________________________________________________________________________________
    //ACI RULES METHODS

    ACIAddWordButton() {
        cy.xpath(this.ACIAddWord).should('exist');
    }

    ACIStatusDropDown() {

        cy.xpath(this.ACIStatusDD).click({ force: true });
        cy.xpath(this.ACIStatusActive).click();

        cy.wait(2000)

        cy.xpath(this.ACIStatusDD).click({ force: true });
        cy.xpath(this.ACIStatusInActive).click();

    }

    ACIPageAssertions() {
        cy.xpath(this.ACICodeHeading).contains(' ACI Code ').should('exist');
        cy.wait(2000);
        cy.xpath(this.ACIDescriptionHeading).contains(' Description ').should('exist');
        cy.wait(2000);
        cy.xpath(this.ACIStatusHeading).contains(' Status ').should('exist');
    }

    ACIToggelButtonCheck() {
        cy.xpath(this.ToggleButton).should('exist');
    }

    ACISearch() {
        cy.xpath(this.ACISearchField).type('RARS2');
        cy.wait(1000)
        cy.xpath(this.ACISearchIcon).click();



    }

    //___________________________________________________________________________________________________________________________________________________________
    //NAN CONFIG METHODS

    goToNANStandardPage() {
        cy.get('.rules__tab')
            .contains('NAN Standard Rules')
            .click({ force: true });

    }
    NANConfigSearch() {
        cy.xpath(this.NANConfigSearchbar).should('exist');
    }

    NANToggleSwitch() {
        cy.xpath(this.NANConfigSearchbar).type('60170');
        cy.xpath(this.ACISearchIcon).click();
        cy.wait(2000);
        cy.xpath(this.ToggleButton).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.ToggleButton).click({ force: true })
        cy.wait(2000)
        //cy.xpath(this.ToggleButton).should('be.checked');
    }

    NANAddRule(name01) {
        cy.xpath(this.NANAddRuleButton).click();
        cy.xpath(this.RuleCodeField).type(name01);
        cy.xpath(this.RuleDescField).type('ABCD');
        cy.xpath(this.TargetFieldDD).type('/FORM');
        cy.wait(1000)
        cy.xpath(this.TargetDDValue).contains('/FORM/MARKET/@MarketTrendsAdverseFinancingIndicator').click();
        cy.xpath(this.ExpressionField).type('COL');
        cy.xpath(this.AddButton).click();
        cy.wait(3000)

        cy.xpath(this.NANConfigSearchbar).type(name01);
        cy.xpath(this.ACISearchIcon).click();
        cy.wait(2000);

    }

    NanStatusDropDown() {

        cy.xpath(this.NANStatusDD).click({ force: true });
        cy.xpath(this.NANStatusActive).click();
        cy.wait(3000)
        cy.xpath(this.NANStatusDD).click({ force: true });
        cy.xpath(this.NANStatusInActive).click();
    }


    //____________________________________________________________________________________________________________
    //Methods Manual Findings

    AsserManualFinding() {

        cy.xpath(this.ManualFindingOption).contains('Manual Finding Groups').should('exist');
    }

    ManualFindingPage() {
        cy.xpath(this.ManualFindingOption).contains('Manual Finding Groups').click();
        cy.xpath(this.addGroup).should('exist');
    }

    GroupAddition(name01) {
        cy.xpath(this.ManualFindingOption).contains('Manual Finding Groups').click();
        cy.xpath(this.addGroup).should('exist');
        cy.xpath(this.addGroup).click();
        cy.xpath(this.MgfCode).type(name01);
        cy.xpath(this.MgfDesc).type('abcd');
        cy.xpath(this.AddButton).click();
        cy.wait(3000);

    }

    EditGroup(name01) {
        cy.xpath(this.ManualFindingOption).contains('Manual Finding Groups').click();
        cy.xpath(this.addGroup).should('exist');
        cy.xpath(this.addGroup).click();
        cy.xpath(this.MgfCode).type(name01);
        cy.xpath(this.MgfDesc).type('abcd');
        cy.xpath(this.AddButton).click();
        cy.wait(6000);



        cy.xpath(this.ManualFindingOption).contains('Manual Finding Groups').click();
        cy.xpath(this.addGroup).should('exist');
        cy.xpath(this.SearchGroup).type(name01);
        cy.xpath(this.SearchIcon).click();
        cy.wait(2000);
        cy.xpath(this.EditDot).click();
        cy.xpath(this.EditOption).contains('Edit').click();
        cy.xpath(this.MgfDesc).type('abcd');
        cy.wait(2000);
        cy.xpath(this.AddButton).click();
        cy.wait(2000);
        cy.xpath(this.DesAsser).should('exist');

    }

    DeletManualGroup(name01) {
        cy.xpath(this.ManualFindingOption).contains('Manual Finding Groups').click();
        cy.xpath(this.addGroup).should('exist');
        cy.xpath(this.addGroup).click();
        cy.xpath(this.MgfCode).type(name01);
        cy.xpath(this.MgfDesc).type('abcd');
        cy.xpath(this.AddButton).click();
        cy.wait(3000);
        cy.reload();
        cy.xpath(this.ManualFindingOption).contains('Manual Finding Groups').click();
        cy.xpath(this.addGroup).should('exist');
        cy.wait(7000);
        // cy.xpath(this.SearchIcon).should('exist');
        cy.xpath(this.SGroup).click({ force: true });
        cy.xpath(this.SearchGroup).type(name01);
        cy.xpath(this.SearchIcon).click();
        cy.wait(2000);
        cy.xpath(this.EditDot).click();
        cy.xpath(this.EditOption).contains('Delete').click();
        cy.xpath(this.DeletePopup).contains('false').click();

    }

    CheckGroupOrderFinding() {
        cy.xpath(this.OrderSearch).type('citynew');
        cy.xpath(this.icon).click();
        cy.wait(4000)
        cy.xpath(this.OrderSearchActionDots).click();
        cy.xpath(this.EditOption).contains('Edit').click();
        cy.wait(4000)
        cy.xpath(this.OrderAddFinding).click();
        cy.wait(2000)
        cy.xpath(this.SelectFindingGroup).type('15333');
        cy.type('{enter}');
        cy.wait(2000)
    }

}
module.exports = new rulesEnginePage();