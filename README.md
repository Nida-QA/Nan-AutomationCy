# nan-test-automation guide
1.	Download and install NodeJS 
2.	Download and install VS Code
3.	Run npm init
4.	Run npm install cypress –save-dev to install cypress on that dir
5.	Run npx cypress open to open cypressnpm config set registry https://registry.npmjs.org
6.  Set your preferred environment via the 'ENV' variable

# To execute all tests on dev environment
    npx cypress run --browser chrome --env ENV='dev'

# To execute a specific file
    npx cypress run --spec cypress\e2e\UI\Orders\orderSearch.cy.js --browser chrome --env ENV='dev'

# To install the webkit for safari run the following command
    npm i playwright-webkit 
    and set the option 'experimentalWebKitSupport: true' in cypress config

# To install xpath plugin, run the following command
    npm i -D cypress-xpath

# To add mochawesome reporter
    npm i --save-dev cypress-mochawesome-reporter

# To install OS-Level environment variables support
    npm install dotenv
    