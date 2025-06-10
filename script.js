//your JS code here. If required.

describe('example to-do app', () => {

  it('Checking tags', () => {
    cy.visit('http://localhost:3000'); // update this to your dev server URL
    cy.get('.testimonial').should('have.length', 2);
  });

  it('testing parent div', () => {
    cy.visit('http://localhost:3000');
    cy.get('.testimonial-section').should('exist');
  });

  it('testing child divs', () => {
    cy.visit('http://localhost:3000');
    cy.get('.testimonial').each(($el) => {
      cy.wrap($el).find('p').should('have.length', 2); // one text + one author
    });
  });

});

