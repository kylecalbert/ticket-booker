import React from 'react';
import {
  HeaderContainer,
  LargeTextContainer,
  SmallTextContainer,
  TextContainer,
} from './Header.style';
import { HeaderButton } from './HeaderButton';
export const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <LargeTextContainer>Welcome back, Gjon Hajdari</LargeTextContainer>
        <SmallTextContainer>
          Take a look at all of your tickets.
        </SmallTextContainer>
      </TextContainer>

      <HeaderButton />
    </HeaderContainer>
  );
};
