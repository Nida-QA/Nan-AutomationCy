import Utility from "../../../support/utility"

const baseURL = Utility.getBE_BaseURL();
const uuid = () => Cypress._.random(0, 1e10)
const accessToken = Utility.getToken();
class usersAPIBaseClass {

  body = {
    "company_name": "test",
    "email": "email@company.com",
    "first_name": "test",
    "last_name": "last",
    "user_name": "testUser",
    "phone_number": "+912547841254",
    "mfa": true
  }

  setPasswordBody = {
    "uid": "test",
    "password": "testPassword",
    "confirm_password": "testPassword",
    "set_password_token": "test"
  }

  // USER Api methods
  createUserAPI(requestBody) {
    cy.request({
      method: "POST",
      url: baseURL + "/users/",
      failOnStatusCode: false,
      body: requestBody
    }).as('createNewUser');

    return cy.get('@createNewUser');
  }

  createANewUser() {
    this.body.phone_number = `+91${uuid()}`;
    this.body.email = `user${uuid()}@example.com`
    this.body.user_name = `test${uuid()}`

    cy.request({
      method: "POST",
      url: baseURL + "/users/",
      failOnStatusCode: false,
      body: this.body
    }).as('createNewUser');

    return cy.get('@createNewUser');
  }

  setPassword(requestBodySetpassword) {
    cy.request({
      method: "POST",
      url: baseURL + "/users/password",
      failOnStatusCode: false,
      body: requestBodySetpassword
    }).as('setPassword');

    return cy.get('@setPassword');
  }

  forgetPassword(email) {
    cy.request({
      method: "POST",
      url: baseURL + "/users/password/forgot",
      failOnStatusCode: false,
      body: {
        "email": email
      }
    }).as('forgetPassword');

    return cy.get('@forgetPassword');
  }

  createReview() {
    cy.fixture('NANSTD 2.pdf', 'binary').then((file) => {
      // cy.log(accessToken);
      let blob = Cypress.Blob.binaryStringToBlob(file, 'application/pdf');
      const formData = new FormData();
      formData.append('file', blob, 'NANSTD 2.pdf');

      const reviewData = {
        "order_number": "NAN-10-test-752852",
        "client_id": "2d3a44ec-19e6-4443-93be-4c108687e2bd",
        "address": "ABCD1234",
        "city": "Glendale",
        "state": "AZ",
        "zip": "10005",
        "reviewer_id": "5BCSbjlRqRQDjt4sfRWNJRaex0x2"
      };

      formData.append('review', JSON.stringify(reviewData));

      cy.request({
        method: 'POST',
        url: baseURL + '/reviews/',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Accept': 'application/json, text/plain, */*',
          'content-type': 'multipart/form-data',
        },
        body: formData,
        timeout: 80000, // Adjust the timeout as needed
      }).then((res) => {
        cy.log('Cypress Response:', JSON.stringify(res));
        expect(res.status).to.eq(201); // Update this based on your expected status code
      });
    });
  }

  GetOrderAPI() {
    const reviewData = "a2049742-f805-4f9d-9331-6c01905da05b";
    cy.request({
      method: 'GET',
      url: baseURL + '/orders/' + reviewData,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/response.json';
      cy.writeFile(filePath, res.body)
    });
  }

  ListOrdersAPI() {
    const formData = new FormData();
    const reviewData = "page_size=25&page_number=1&sort_order=desc&sort_by=created_on&search=&order_no=&address=&city=&state=&zip=&reviewers=&statuses=Pending&statuses=Pending%20Reviewer&statuses=Pending%20Escalated%20Review&statuses=Condition%20Sent%20to%20Vendor&statuses=Escalated%20Review%20in%20Progress&statuses=Escalated%20Review%20Complete&statuses=Revision%20Requested&statuses=In%20Progress&statuses=On%20Hold&statuses=Pending%20Review&statuses=Processing&statuses=Review%20in%20Progress&statuses=Ready%20for%20Review&statuses=Ready%20for%20Appraisers%20Review&clients=&recent_data=false&time_zone=Asia/Karachi";

    formData.append('review', JSON.stringify(reviewData));

    cy.request({
      method: 'GET',
      url: baseURL + '/orders/',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      body: formData,
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/OrderList.json';
      cy.writeFile(filePath, res.body)
    });
  }

  GetStipListAPI() {
    const reviewData = "a2049742-f805-4f9d-9331-6c01905da05b";

    cy.request({
      method: 'GET',
      url: baseURL + '/orders/download_stip_list/' + reviewData,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/StipList.json';
      cy.writeFile(filePath, res.body)
    });
  }

  GetOrderHistoryAPI() {
    const reviewData = "a2049742-f805-4f9d-9331-6c01905da05b";

    cy.request({
      method: 'GET',
      url: baseURL + '/orders/history/' + reviewData,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/OrderHistory.json';
      cy.writeFile(filePath, res.body)
    });
  }

  GetAdditionalDocAPI() {
    const reviewData = "NAN1602451005-ESCR";

    cy.request({
      method: 'GET',
      url: baseURL + '/orders/additional_docs/' + reviewData,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/AdditionalDoc.json';
      cy.writeFile(filePath, res.body)
    });
  }

  LogoutAPI(authToken) {
    // cy.fixture('accessTokenFile.json').then((data) => {
    cy.log('Logout Token' + authToken);
    cy.request({
      method: 'POST',
      url: baseURL + '/users/logout',
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'accept': 'application/json'
        //'access-control-allow-credentials': 'true',
      }
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      //responseType: 'json'
    }).then((res) => {
      // cy.log('Cypress Response:', res);
      expect(res.status).to.eq(201); // Update this based on your expected status code

    });

  }

  Login() {
    cy.request({
      method: 'POST',
      url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4OZblgVV2e1iJiEroOECZgmcIuHGv20o ',
      headers: {
        'Origin': Utility.getUrl(),
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json',
      },
      body: {
        "returnSecureToken": true,
        "email": Utility.getEmail(),
        "password": Utility.getPassword(),
        "clientType": "CLIENT_TYPE_WEB",
        "tenantId": "StagingUsers-s5cx9"
      },
      timeout: 80000, // Adjust the timeout as needed
    }).then((res) => {
      expect(res.status).to.eq(200); // Update this based on your expected status code
      const authToken = res.body.idToken;
      this.LogoutAPI(authToken);
    });
  }

  GetUserAPI() {
    const reviewData = "4b68aa50-f3a4-4638-9aee-a4230b7a3806";

    cy.request({
      method: 'GET',
      url: baseURL + '/users/' + reviewData,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/GetUser.json';
      cy.writeFile(filePath, res.body)
    });
  }

  GetUserDocAPI() {
    const reviewData = "1e5f9bed-dc32-44cc-917e-381938259d64";

    cy.request({
      method: 'GET',
      url: baseURL + '/users/download?user_id=' + reviewData,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/GetUserDoc.json';
      cy.writeFile(filePath, res.body)
    });
  }

  GetUserConfigAPI() {
    const reviewData = "TM1OARmyFEW88eTPBGpGwaINhv32";

    cy.request({
      method: 'GET',
      url: baseURL + '/users/config?external_id=' + reviewData,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/GetUserConfig.json';
      cy.writeFile(filePath, res.body)
    });
  }


  createUserAPI(name01) {
    const formData = new FormData();

    const reviewData = {
      "first_name": "Test",
      "last_name": "Test",
      "role": "Admin",
      "email": "xiguqueibenneu" + name01 + "@youpmail.com"
    };

    formData.append('user', JSON.stringify(reviewData));

    cy.request({
      method: 'POST',
      url: baseURL + '/users/',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'multipart/form-data',
      },
      body: formData,
      timeout: 80000, // Adjust the timeout as needed
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(201); // Update this based on your expected status code
    });
  };

  GetUserlistAPI() {
    cy.request({
      method: 'GET',
      url: baseURL + '/users/?page_size=25&page_number=1&sort_order=desc&sort_by=&search=&status=all_records',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'accept': 'application/json, text/plain, /',
      },
      // Set 'responseType' to 'json' to automatically parse the response body as JSON
      responseType: 'json'
    }).then((res) => {
      cy.log('Cypress Response:', res);
      expect(res.status).to.eq(200); // Update this based on your expected status code


      // Save response body as JSON file at project directory path + remaining path
      const filePath = 'D:/NAN/nan-test-automation/cypress/fixtures/GetUserlist.json';
      cy.writeFile(filePath, res.body)
    });
  }

}

module.exports = new usersAPIBaseClass();