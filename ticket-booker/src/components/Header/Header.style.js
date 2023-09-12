import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 300px;
  background-color: 'red';
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${darkModeColors.borders};
`;

export const TextContainer = styled.text`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const LargeTextContainer = styled.text`
  color: ${darkModeColors.textPrimary};
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
`;

export const SmallTextContainer = styled.text`
  color: ${darkModeColors.textSecondary};
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
`;
