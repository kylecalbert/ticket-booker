describe('Testing the cards get filtered based on the button that is clicked', () => {
  // it('displays only the travel tickets', () => {
  //   cy.visit('http://localhost:3000/');
  //   cy.contains('Drake').should('be.visible');
  //   cy.get('[data-cy="travel-cy-btn"]').click();
  //   cy.contains('Flight to Paris').should('exist');
  //   cy.contains('Summer Vacation in Bali').should('exist');
  //   cy.contains('Drake').should('not.exist');
  //   cy.contains('Avengers').should('not.exist');
  // });

  // it('displays only the movie tickets', () => {
  //   cy.visit('http://localhost:3000/');
  //   cy.contains('Drake').should('be.visible');
  //   cy.get('[data-cy="movie-cy-btn"]').click();
  //   cy.contains('Jurassic Park Screening').should('exist');
  //   cy.contains('Avengers').should('exist');
  //   cy.contains('Summer Vacation in Bali').should('not.exist');
  //   cy.contains('Drake').should('not.exist');
  // });

  it('should only show tickets of the selected category', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Drake').should('be.visible');

    //shows tickets only of concerts
    cy.get('[data-cy="concert-cy-btn"]').click();
    cy.get('[data-cy="ticket-type"]').each((ticketType) => {
      expect(ticketType.text()).to.equal('Concert');
    });

    //shows tickets only of travels

    cy.get('[data-cy="travel-cy-btn"]').click();
    cy.get('[data-cy="ticket-type"]').each((ticketType) => {
      expect(ticketType.text()).to.equal('Travel');
    });
    //shows tickets only of movies

    cy.get('[data-cy="movie-cy-btn"]').click();
    cy.get('[data-cy="ticket-type"]').each((ticketType) => {
      expect(ticketType.text()).to.equal('Movie');
    });
  });
});
