// import userAPI from "./usersAPIBaseClass"

// describe('Set password for newly created user', ()=> {

//     /*
//     * Password criteria: 
//     *   min length = 8 
//     *   upper_case = 1
//     *   lower_case = 1
//     *   min digit = 1
//     *   min special char = 1
//     */
//     const correctPassword = "Abcdef1@";
//     const wrongPassword = "bcdef1";
//     let external_id = "";
//     let newUserEmail = "";
//     let passwordToken = "";
//     let passwordBody = {}

//     before(() => {
//         userAPI.createANewUser().then(response => {
//             cy.log("Creating a new user with valid parameters");
//             external_id = response.body.external_id;
//             newUserEmail = response.body.email;
//             passwordToken = response.body.set_password_token;
//             expect(response.status).to.eq(201);
//             cy.log("New user created with valid parameters");
//         });
//     })

//     it('Verify a new user is unable to set a password which does not match the criteria', ()=>{
//         userAPI.setPasswordBody.password = wrongPassword;
//         userAPI.setPasswordBody.confirm_password = wrongPassword;
//         userAPI.setPasswordBody.uid = external_id;
//         userAPI.setPasswordBody.set_password_token = passwordToken;
//         passwordBody = userAPI.setPasswordBody;

//         userAPI.setPassword(passwordBody).then(response => {
//             cy.log("Trying to set incorrect password");
//             expect(response.status).to.eq(422);
//             cy.log("Password does not match the criteria");
//         })
//     })

//     it('Verify a new user is being able to set password', ()=>{
//         userAPI.setPasswordBody.password = correctPassword;
//         userAPI.setPasswordBody.confirm_password = correctPassword;
//         userAPI.setPasswordBody.uid = external_id;
//         userAPI.setPasswordBody.set_password_token = passwordToken;
//         passwordBody = userAPI.setPasswordBody;
        
//         userAPI.setPassword(passwordBody).then(response => {
//             cy.log("Setting correct password");
//             expect(response.status).to.eq(200);
//             cy.log("Password added");
//         })
//     })

//     it('Verify a user is being able to set new password after forgetting using correct email', ()=>{
//         const correctPassword2 = "Abcdef1@13"
//         userAPI.setPasswordBody.password = correctPassword2;
//         userAPI.setPasswordBody.confirm_password = correctPassword2;
//         userAPI.setPasswordBody.uid = external_id;
//         userAPI.setPasswordBody.set_password_token = passwordToken
//         passwordBody = userAPI.setPasswordBody;

//         userAPI.forgetPassword(newUserEmail).then(response => {
//             expect(response.status).to.eq(200);
//             cy.log(`Reset email has been sent to the email - ${newUserEmail}`);
//         })

//         // TODO : need to get the token from email once email part is implemented
//     })

//     it('Verify a user is not being able to set new password after forgetting using incorrect email', ()=>{
//         const wrongEmail = "wrongEmail@company.com";
//         userAPI.forgetPassword(wrongEmail).then(response => {
//             expect(response.status).to.eq(400);
//             cy.log("User is unable to set password with email that is not registered");
//         })
//     })
// })