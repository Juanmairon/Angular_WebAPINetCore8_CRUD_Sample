describe('longMaximadeCaracteres', () => {
  it('Al agregar nombre se verifica que no se agregue si tiene 100 caracteres', () => {
    cy.visit('https://employeecrudfront-f9bxaecma0cueccp.brazilsouth-01.azurewebsites.net/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn').click();
    cy.get('.form-control').clear('sdakljf');

    cy.get('.form-control').type(
      'sdakljfhsadjklfhklsjadhfkljsadhfkljsadhfkljsadflkjhsadhfkljsadhflkjsdahfkjlasdhflkjsadhfkjlsadhflkjsadhfkljsadhfklsajdfhlkjsadhflkjsadhfkljsadfhskljdafhsadkjlfhsadlkjfhsladkjfhslakdjfhskljadfhklsjadfhlksjadfhkljasdfhkljsadfhslakdjfhkljsadfhlskadjfhkljsadfhlksadfhlkjsadfhsklajdfhskaldjfhskladjfhkljsdafhlkjsdafhkljsadfhklsjadfhlksjadfhkljsadfhkjlsdafhlksdfhjlkasdfhjksadlfhksjaldfhlkjsdafhjksdalfhlksjadfhsjkladfhjklsadfhlksjadfhjlksadjhfsadlkjfhsajdklfhjklsadfhlkjsadfhjlksadhfjksladhfjlkasdhfjklsadfhsadjklfhskajdlfhlksadjfhjsadklfhljksadfhjsadlkjfhsadlkjfhsadjklfhsadlkfjhsadlkjfhsadjklfhlkjsadfhjlksadfhljksdafjkhsad'
    );

    cy.get('.btn').click();

    // Verificar que aparece un Toastr con el mensaje de error
    cy.get('.toast-message') // Selecciona el Toastr
      .should('be.visible') // Verifica que sea visible
      .and('contain.text', 'El nombre no puede tener más de 100 caracteres.'); // Verifica el mensaje de error
  });
});