describe('addApellidoMayusculas', () => {
    it('Al agregar nombre se verifica que el apellido este en mayusculas', () => {
      cy.visit('https://employeecrudfront-f9bxaecma0cueccp.brazilsouth-01.azurewebsites.net/');

      /* ==== Generated with Cypress Studio ==== */
      cy.get('.btn').click();
      cy.get('.form-control').clear('J');
      cy.get('.form-control').type('Juampi Miron');
      cy.get('.btn').click();
      cy.get('tr:last-child > :nth-child(2)').should('have.text', ' Juampi MIRON ');
      cy.get(':nth-child(7) > :nth-child(5) > a > .fa').click();
      cy.reload();
      cy.get('tr:last-child > :nth-child(2)').should('not.contain.text', ' Juampi MIRON ');
      /* ==== End Cypress Studio ==== */
    });
  });