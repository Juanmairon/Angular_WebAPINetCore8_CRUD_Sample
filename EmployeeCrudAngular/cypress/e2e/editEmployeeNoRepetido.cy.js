describe('editEmployeeNoRepetido', () => {
  it('Al editar nombre se verifica que no esté repetido', () => {
    cy.visit('https://employeecrudfront-f9bxaecma0cueccp.brazilsouth-01.azurewebsites.net/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > :nth-child(4) > a > .fa').click();
    cy.get('.form-control').click();
    cy.get('.form-control').click();
    cy.get('.form-control').clear('J');
    cy.get('.form-control').type('Juan PÉREZ');
    cy.get('.btn').click();
    // Verificar que aparece un Toastr con el mensaje de error
    cy.get('.toast-message') // Selecciona el Toastr
      .should('be.visible') // Verifica que sea visible
      .and('contain.text', 'El nombre del empleado ya existe.'); // Verifica el mensaje de error
    /* ==== End Cypress Studio ==== */
  });
});