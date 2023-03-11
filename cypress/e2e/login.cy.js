describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/index.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('button[type="button"]').click()
})
})