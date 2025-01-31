import userAPI from "./usersAPIBaseClass"

const uuid = () => Cypress._.random(0, 1e10)

describe('Get Order List API', () => {

  it('Verify user can get an order from order ID', () => {

    userAPI.ListOrdersAPI()
  })
})