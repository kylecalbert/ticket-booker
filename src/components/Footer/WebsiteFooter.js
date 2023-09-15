import React from 'react';
import { Footer } from './Footer';
import { Text } from '../Text/Text';
import styled from 'styled-components';
import Socials from '../../Assets/dark/Socials.png';

export const MiddleFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.img`
  max-width: 100px;
  height: auto;
`;

export const RightFooterContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
export const WebsiteFooter = () => {
  return (
    <Footer padding={'10px'}>
      <Text size={'15px'}>
        Copyright © 2022 TicketBooker. All rights reserved.
      </Text>

      <MiddleFooterContainer>
        <IconContainer src={Socials} />
      </MiddleFooterContainer>
      <RightFooterContainer>
        <Text margin={'0 10px 0 0'} size={'15px'}>
          Privacy Policy
        </Text>
        <Text size={'15px'}>Terms of Use</Text>
      </RightFooterContainer>
    </Footer>
  );
};
