// Card.js
import React from 'react';
import {
  AddButtonContainer,
  CardContainer,
  CardDetails,
  DateTimeContainer,
  TopDetailsContainer,
  BottomDetailsContainer,
} from './Card.styles';
import { CardFooter } from './Card.styles';
import { Text } from '../Text/Text';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { darkModeColors } from '../../constants/colors';
import { Footer } from '../Footer/Footer';

import CalendarDark from '../../Assets/dark/calendar.png';
import LocationDark from '../../Assets/dark/location.png';
import { Image } from '../Image/Image';
import { fontSizes, fontWeight } from '../Fonts/Fonts';
//create constant for resued sizes

export const Card = ({ data }) => {
  return (
    <CardContainer>
      <CardDetails>
        <Text
          size={'1.5em'}
          margin={'0 0 17px 0'}
          color={darkModeColors.textPrimary}
        >
          {data.title}
        </Text>
        <TopDetailsContainer>
          <Image src={CalendarDark} />
          <DateTimeContainer>
            <Text
              fontWeight={fontSizes.SemiBold}
              size={fontSizes.small}
              color={darkModeColors.textPrimary}
            >
              {data.date}
            </Text>
            <Text
              fontWeight={fontSizes.SemiBold}
              margin={'4px 0 0 0 '}
              size={fontSizes.small}
              color={darkModeColors.textSecondary}
            >
              {data.time}
            </Text>
          </DateTimeContainer>
        </TopDetailsContainer>

        <BottomDetailsContainer>
          <Image src={LocationDark} />
          <Text
            fontWeight={fontWeight.semiBold}
            size={fontSizes.small}
            margin={'0 0 0 5px'}
            color={darkModeColors.primary}
          >
            {data.location}
          </Text>
        </BottomDetailsContainer>
      </CardDetails>

      <Footer
        bordertop={`1px solid ${darkModeColors.borders}`}
        margin={'0 0 4px 10px'}
        padding={'10px 0 10px 0 '}
        height={'35px'}
        flexdirection={'row'}
      >
        <Text
          color={darkModeColors.accent}
          size={fontSizes.small}
          fontWeight={fontWeight.normal}
        >
          {data.ticketType}
        </Text>
        <AddButtonContainer>Add</AddButtonContainer>
      </Footer>
    </CardContainer>
  );
};
