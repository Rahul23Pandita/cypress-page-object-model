# cypress-sample-tests


Go to project folder:

npm install

To open GUI:

npx cypress open


To run via command line:

npx cypress run

merge the reports:

npx mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome.json

Generate HTML reports: 

npx mochawesome-report-generator --reportDir cypress/reports/ --cdn true --charts true cypress/reports/mochawesome.json

