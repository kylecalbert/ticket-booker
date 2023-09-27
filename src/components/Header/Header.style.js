import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 15.6rem;

  /* background: 'red'; */
  border-bottom: 1px solid ${darkModeColors.borders};
  /* background-color: red; */
  justify-content: center;

  @media (max-width: 768px) {
    height: 20rem;
  }
  @media (max-width: 300px) {
    height: 25rem;
  }
`;

export const TextContainer = styled.text`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  /* background-color: blue; */
`;
