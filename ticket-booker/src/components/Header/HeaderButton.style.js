import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;

  width: 210px;
  height: 40px;
  background-color: #0074d9;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
`;

export const LeftContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.text``;

export const IconContainer = styled.img`
  margin: 10px;
  max-width: 100px;
  height: auto;
`;

export const SmallTextContainer = styled.text`
  color: ${darkModeColors.textPrimary};
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
`;

///the text can e made resuable
