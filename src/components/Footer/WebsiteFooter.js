import React from 'react';
import { Footer } from './Footer';
import { Text } from '../Text/Text';
import styled from 'styled-components';
import Socials from '../../Assets/dark/Socials.png';
import { minWidth } from '../Navbar/Navbar.style';
import { darkModeColors } from '../../constants/colors';

export const MiddleFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.img`
  max-width: 100px;
  height: auto;
`;

export const FooterContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
export const WebsiteFooter = () => {
  return (
    <Footer padding={'10px'}>
      <Text color={darkModeColors.textSecondary} size={'15px'}>
        Copyright © 2022 TicketBooker. All rights reserved.
      </Text>

      <FooterContainer>
        <IconContainer src={Socials} />
      </FooterContainer>
      <FooterContainer>
        <Text margin={'0 50px 0 0'} size={'15px'}>
          Privacy Policy
        </Text>
        <Text size={'15px'}>Terms of Use</Text>
      </FooterContainer>
    </Footer>
  );
};
