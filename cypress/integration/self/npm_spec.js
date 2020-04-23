
import { HomePage } from "../../page-objects/home-page";


describe("NPM Search tests", () => {

    const homePage = new HomePage
    beforeEach(()=>{
        homePage.navigate() //navigate to website
    });

    it("should navigate to Home Page and search for a package",()=>{
        homePage.searchByKeyword('cypress')
        cy.get('div > section > div > div > a > h3').first().should('be.visible') 
    })

})