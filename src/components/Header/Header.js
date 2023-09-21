import React from 'react';
import { HeaderContainer, TextContainer } from './Header.style';
import { darkModeColors } from '../../constants/colors';
import { HeaderButton } from './HeaderButton';
import { Text } from '../Text/Text';
import { fontSizes } from '../Fonts/Fonts';
export const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Text size={fontSizes.Large}>Welcome back, Kyle Calbert</Text>
        <Text
          size={fontSizes.medium}
          margin="10px 0 0 0"
          color={darkModeColors.textSecondary}
        >
          Take a look at all of your tickets.
        </Text>
      </TextContainer>

      <HeaderButton />
    </HeaderContainer>
  );
};
