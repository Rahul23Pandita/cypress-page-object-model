export class HomePage {
    navigate()
    {
        cy.visit("/simple-html-elements-for-automation/")
    }

    validateText(id, text){
        cy.get(`input[data-original_id=${id}]`)
        .type(text).should("have.value", text) 
    }

}
