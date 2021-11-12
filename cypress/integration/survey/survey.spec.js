describe('Home page', ()=>{
    it('Successfully load', ()=>{
        cy.visit('http://localhost:3000')
    })
    it('Found header', ()=>{
        cy.get('[data-cy=homepage-header]', {timeout:4000}).invoke('text').should('contain',"ชื่อ ...")
    })
})
describe('Profile page', ()=>{
    it('Successfully load', ()=>{
        cy.get('[data-cy=profile]', {timeout:4000}).contains("Profile").click()
        cy.url().should('contain',"profile")
    })
    it('Input field', ()=>{
        cy.get('[data-cy=name-input]', {timeout:4000}).type("pui pui")
    })
})