# cypress-sample-tests


Go to project folder:

Use below command to install dependencies - 

npm install

To open Cypress GUI in interactive mode:

npx cypress open


To run Cypress via command line:

npx cypress run

merge the mochawesome reports:

npx mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome.json

Generate HTML reports: 

npx mochawesome-report-generator --reportDir cypress/reports/ --cdn true --charts true cypress/reports/mochawesome.json

