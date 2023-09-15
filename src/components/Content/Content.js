import React from 'react';
import { ContentContainer } from './Content.style';
import { Card } from './Card';
import { CardFooter } from './Card.styles';
export const Content = () => {
  return (
    <ContentContainer>
      <Card />
      <Card />
    </ContentContainer>
  );
};
