describe('longMinimadeCaracteres', () => {
  it('Al agregar nombre se verifica que no tenga menos de 2 caracteres', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://employeecrudfront-f9bxaecma0cueccp.brazilsouth-01.azurewebsites.net/');
    cy.get('.btn').click();
    cy.get('.form-control').clear('a');
    cy.get('.form-control').type('a');
    cy.get('.btn').click();

    // Verificar que aparece un Toastr con el mensaje de error
    cy.get('.toast-message') // Selecciona el Toastr
      .should('be.visible') // Verifica que sea visible
      .and('contain.text', 'El nombre debe tener al menos 2 caracteres.'); // Verifica el mensaje de error
    /* ==== End Cypress Studio ==== */
  });
});