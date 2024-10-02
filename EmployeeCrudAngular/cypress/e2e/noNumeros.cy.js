describe('noNumerosenNombre', () => {
  it('Al agregar nombre se verifica que no contenga numeros', () => {
    cy.visit('http://localhost:4200/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn').click();
    cy.get('.form-control').clear('J');
    cy.get('.form-control').type('Juan02Pérez');
    cy.get('.btn').click();

    // Verificar que aparece un Toastr con el mensaje de error
    cy.get('.toast-message') // Selecciona el Toastr
      .should('be.visible') // Verifica que sea visible
      .and('contain.text', 'El nombre no puede contener números.'); // Verifica el mensaje de error
    /* ==== End Cypress Studio ==== */
  });
});