import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { MemoryRouter } from 'react-router-dom';
describe('Navbar', () => {
  it(' Should Render the Navbar without error', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it('Should display the menu links', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');
    const faqLink = screen.getByText('FAQ');
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();
  });

  it('Should display the Logo', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });
});

//test the navbar renders
//test logo, profile and links render
///test the navbar gets exteded when icon is clicked
///test the state of the usetstae changes from false to true
//
