// Card.js
import React from 'react';
import { AddButtonContainer, CardContainer, CardDetails } from './Card.styles';
import { CardFooter } from './Card.styles';
import { Text } from '../Text/Text';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon/Icon'; // Import the corrected Icon component
import { darkModeColors } from '../../constants/colors';
import { Footer } from '../Footer/Footer';
export const Card = () => {
  return (
    <CardContainer>
      <CardDetails>
        <Text size={'25px'} margin={'0 0 10px 0'} color={'red'}>
          Title
        </Text>
        <Text size={'16px'} color={'red'}>
          Date
        </Text>
        <Text color={'red'}>Location</Text>
      </CardDetails>

      <Footer margin={'0 0 4px 10px'}>
        <Text size={'15px'} fontWeight={'normal'}>
          Ticket type
        </Text>
        <AddButtonContainer>Add</AddButtonContainer>
      </Footer>
    </CardContainer>
  );
};
