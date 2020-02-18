/// <reference types="cypress"/>

import { HomePage } from "../../page-objects/home-page";


describe("Simple HTML test", () => {

    const homePage = new HomePage
    beforeEach(()=>{
        homePage.navigate() //navigate to website
    });

    it("should navigate to Home Page and send the value to text boxes",()=>{
        homePage.validateText("name","Molly")
        homePage.validateText("email","Molly@gmail.com")
    })

})