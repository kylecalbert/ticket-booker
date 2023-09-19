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

//create constant for resued sizes
const SemiBold = '600';
const textSize = '1em';
export const Card = () => {
  return (
    <CardContainer>
      <CardDetails>
        <Text
          size={'1.5em'}
          margin={'0 0 17px 0'}
          color={darkModeColors.textPrimary}
        >
          Card Title
        </Text>
        <TopDetailsContainer>
          <Image src={CalendarDark} />
          <DateTimeContainer>
            <Text
              fontWeight={SemiBold}
              size={textSize}
              color={darkModeColors.textPrimary}
            >
              Date
            </Text>
            <Text
              fontWeight={SemiBold}
              margin={'4px 0 0 0 '}
              size={textSize}
              color={darkModeColors.textSecondary}
            >
              Time
            </Text>
          </DateTimeContainer>
        </TopDetailsContainer>

        <BottomDetailsContainer>
          <Image src={LocationDark} />
          <Text
            fontWeight={SemiBold}
            size={textSize}
            margin={'0 0 0 5px'}
            color={darkModeColors.primary}
          >
            Location
          </Text>
        </BottomDetailsContainer>
      </CardDetails>

      <Footer
        borderTop={`1px solid ${darkModeColors.borders}`}
        margin={'0 0 4px 10px'}
        padding={'10px 0 10px 0 '}
        height={'35px'}
        flexDirection={'row'}
      >
        <Text
          color={darkModeColors.accent}
          size={textSize}
          fontWeight={'normal'}
        >
          Ticket type
        </Text>
        <AddButtonContainer>Add</AddButtonContainer>
      </Footer>
    </CardContainer>
  );
};
