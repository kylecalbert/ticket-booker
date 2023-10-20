describe('Test the Navabr routing works', () => {
  it('Successfully navigates to the Home Page upon clicking Home', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="home"]').click();
    cy.url().should('include', '/');
  });
  it('Successfully navigates to the About Page upon clicking About', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="about"]').click();
    cy.url().should('include', '/About');
  });
  it('Successfully navigates to the Contact Page upon clicking Contact', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="contact"]').click();
    cy.url().should('include', '/Contact');
  });

  it('Successfully navigates to the FAQ Page upon clicking FAQ', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="faq"]').click();
    cy.url().should('include', '/FAQ');
  });
});

describe('Test the Navbar Routing on Mobile screen size', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:3000/');
  });

  it('Successfully navigates to the Home Page upon clicking Home on mobile', () => {
    cy.get('[data-cy="menu-icon"]').should('be.visible').click();

    cy.get('[data-cy="navbar-extended"]').should('be.visible');

    cy.get('[data-cy="home-extended"]').click();

    cy.url().should('include', '/');
  });

  it('Removes the navbar menu when the user clicks the x icon', () => {
    cy.get('[data-cy="menu-icon"]').should('be.visible').click();
    cy.get('[data-cy="menu-icon"]').should('be.visible').click();
    cy.get('[data-cy="navbar-extended"]').should('not.exist');
  });
});
