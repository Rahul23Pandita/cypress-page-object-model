export class HomePage {
    navigate()
    {
        cy.visit("/")
    }

    searchByKeyword(text){
        cy.get(`input[type=search]`).type(text)
        cy.get('button[type=submit]').type('{enter}')
        cy.get(`input[type=search]`).clear()  

    }

}
