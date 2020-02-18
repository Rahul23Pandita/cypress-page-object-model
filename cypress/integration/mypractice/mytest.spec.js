/// <reference types="cypress"/>


describe("Simple HTML test", () => {

beforeEach(()=>{
    cy.visit('/simple-html-elements-for-automation/') //navigate to website
})

it('should navigate to Home Page and send the value to text boxes',()=>{
    
    
    cy.get('input[data-original_id="name"]')
    .type("Molly")
    .should("have.value", "Molly") 

    cy.wait(1000)

    cy.get('input[data-original_id="email"]')
    .type("Molly@gmail.com")
    .should("have.value", "Molly@gmail.com")  //send keys and validate the value
    
    cy.wait(1000)
    
    cy.get('input[data-original_id="name"]').clear()

    cy.title().should('eq', 'Simple HTML Elements For Automation - Ultimate QA') //verify the title
    cy.url().should('eq', 'https://ultimateqa.com/simple-html-elements-for-automation/') //verify the current url
});

it("should be able to s on radio element and validate it",()=>{
    cy.get('[type="radio"]').last().check() //check on last radio button
    cy.wait(1000)
    cy.get('[type="radio"]').first().check() ////check on first radio button
    cy.wait(1000)
    cy.get('[type="radio"]').check('female') //check on specified value attribute value

    cy.get('input[value="female"]').should("be.checked")  //verify the value is checked

    cy.get('[type="radio"]').eq(0).click()
});

it("should be able to check the checkbox element and validate it",()=>{
    cy.get('[type="checkbox"]').check(['Bike','Car'])

    //check on last radio button
    cy.get('input[value="Bike"]').should('be.checked').and('not.be.disabled') 
    cy.get('input[value="Car"]').should('be.checked').and('not.be.disabled')
    cy.wait(1000)

    cy.get('[type="checkbox"]').uncheck(['Bike'])

});

it("should be able to select value from dropdown on dropdown",()=>
{
    cy.get('select').select('opel').should('have.value','opel') // select dropdown value and check the selected value
});

it("should be able to click on link",()=>
{
    cy.wait(1000)
    cy.get('a').contains('Tab 2').click()
    cy.wait(1000)
    cy.get('a').contains('Tab 1').click()
});

it("should be able to navigate",()=>
{
    cy.wait(1000)
    cy.get('button').contains('Button').click()
    cy.wait(1000)
    cy.go('back')
});

it("should be read from JSON",()=>
{
    cy.readFile('./cypress/fixtures/example.json').its('email').should('eq','hello@cypress.io')
    
});

});
