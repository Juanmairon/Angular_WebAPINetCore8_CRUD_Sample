describe('editEmployeeTest', () => {
  it('Edita correctamente un empleado', () => {
    cy.visit('http://localhost:4200/') // URL del front
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > :nth-child(4) > a > .fa').click();
    cy.get('.form-control').click();
    cy.get('.form-control').click();
    cy.get('.form-control').clear('J');
    cy.get('.form-control').type('Juan Pérez');
    cy.get('.btn').click();
    cy.get(':nth-child(1) > :nth-child(2)').should('include.text', 'Juan PÉREZ');
    /* ==== End Cypress Studio ==== */
  });
});
