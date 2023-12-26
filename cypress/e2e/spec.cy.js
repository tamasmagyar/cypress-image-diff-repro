describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/commands/window')
    cy.compareSnapshot('kaki')
  })
})