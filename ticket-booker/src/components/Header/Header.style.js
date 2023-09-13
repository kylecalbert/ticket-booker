import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 300px;
  background: 'red';
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${darkModeColors.borders};
`;
export const TextContainer = styled.text`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
