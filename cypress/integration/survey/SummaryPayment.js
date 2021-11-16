describe('Home page', ()=>{
    it('Successfully load', ()=>{
        cy.visit('http://localhost:3000')
    })
})
    describe('Summary Payment page', ()=>{
        it('Successfully load', ()=>{
            cy.get('[data-cy=summary-payment]', {timeout:4000}).contains("Summary Payment").click()
            cy.url().should('contain',"summary-payment")

        })
    })