describe('addEmployeeNoRepetido', () => {
  it('Al agregar nombre se verifica que no este repetido', () => {
    cy.visit('https://employeecrudfront-f9bxaecma0cueccp.brazilsouth-01.azurewebsites.net/');
    
    // Intentar agregar un empleado repetido
    cy.get('.btn').click(); // Botón para agregar nuevo empleado
    cy.get('.form-control').clear(); // Limpiar el campo del nombre
    cy.get('.form-control').type('Juan PÉREZ'); // Ingresar un nombre ya existente
    cy.get('.btn').click(); // Enviar el formulario
    
    // Verificar que aparece un Toastr con el mensaje de error
    cy.get('.toast-message') // Selecciona el Toastr
      .should('be.visible') // Verifica que sea visible
      .and('contain.text', 'El nombre del empleado ya existe.'); // Verifica el mensaje de error
  });
});
