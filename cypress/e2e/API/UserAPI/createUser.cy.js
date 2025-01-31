import userAPI from "./usersAPIBaseClass"

const randomGenerator = () => Cypress._.random(0, 1e5)
const name01 = randomGenerator();

describe('Get Additional Doc API', () => {

    it('Verify user can get an order from order ID', () => {

        userAPI.createUserAPI(name01)
    })
})