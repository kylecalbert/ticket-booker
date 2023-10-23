describe('Testing the cards get filtered based on the button that is clicked', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.contains('Drake').should('be.visible');
  });

  context('Concert Tickets', () => {
    it('should only show tickets of the concert category', () => {
      cy.get('[data-cy="concert-cy-btn"]').click();
      cy.get('[data-cy="ticket-type"]').each((ticketType) => {
        expect(ticketType.text()).to.equal('Concert');
      });
    });
  });

  context('Travel Tickets', () => {
    it('should only show tickets of the travel category', () => {
      cy.get('[data-cy="travel-cy-btn"]').click();
      cy.get('[data-cy="ticket-type"]').each((ticketType) => {
        expect(ticketType.text()).to.equal('Travel');
      });
    });
  });

  context('Movie Tickets', () => {
    it('should only show tickets of the movie category', () => {
      cy.get('[data-cy="movie-cy-btn"]').click();
      cy.get('[data-cy="ticket-type"]').each((ticketType) => {
        expect(ticketType.text()).to.equal('Movie');
      });
    });
  });
});
