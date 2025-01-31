// Get the value of evnironment variable i.e ENV
let envVar = Cypress.env('ENV');

class Utility {

    getUrl() {
        // Check the value and return desired URL
        if (envVar == 'dev')
            return Cypress.env('DEV_URL');
        else if (envVar == 'staging')
            return Cypress.env('STAGING_URL');
        else if (envVar == 'rev')
            return Cypress.env('STAGING_URL_Rev');
        else if (envVar == 'manager')
            return Cypress.env('STAGING_URL_man');
        else if (envVar == 'testing')
            return Cypress.env('TESTING_URL');
    }

    getEmail() {
        // Check the value and return desired email
        if (envVar == 'dev')
            return Cypress.env('DEV_EMAIL');
        else if (envVar == 'staging')
            return Cypress.env('STAGING_EMAIL');
        else if (envVar == 'rev')
            return Cypress.env('STAGING_EMAIL_Rev');
        else if (envVar == 'manager')
            return Cypress.env('STAGING_EMAIL_man');
        else if (envVar == 'testing')
            return Cypress.env('TESTING_EMAIL');

    }

    getPassword() {
        // Check the value and return desired password
        if (envVar == 'dev')
            return Cypress.env('DEV_PASSWORD');
        else if (envVar == 'staging')
            return Cypress.env('STAGING_PASSWORD');
        else if (envVar == 'rev')
            return Cypress.env('STAGING_PASSWORD_Rev');
        else if (envVar == 'manager')
            return Cypress.env('STAGING_PASSWORD_man');
        else if (envVar == 'testing')
            return Cypress.env('TESTING_PASSWORD');
    }

    getBE_BaseURL() {
        if (envVar == 'dev')
            return Cypress.env('DEV_BASE_URL');
        else if (envVar == 'staging')
            return Cypress.env('STAGING_BASE_URL');
        else if (envVar == 'rev')
            return Cypress.env('STAGING_BASE_URL_Rev');
        else if (envVar == 'manager')
            return Cypress.env('STAGING_BASE_URL_man');
        else if (envVar == 'testing')
            return Cypress.env('TESTING_BASE_URL');
    }

    getToken() {
        return Cypress.env('TOKEN');
    }

    /* getLastMonthFirstDateAsString() {
         const today = new Date();
         const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
         const options = { month: 'short', day: '2-digit' };
         return formattedDate = lastMonth.toLocaleDateString('en-US', options);
         // return formattedDate;
       } */
}

module.exports = new Utility();