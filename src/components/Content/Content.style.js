import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const ContentContainer = styled.div`
  display: flex;

  width: 95%;

  margin-top: 20px;
`;

export const CardContainer = styled.div`
  display: grid;

  /* background-color: blue; */
  width: 100%;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 1685px) {
    display: grid;
    /* gap: 10px; */

    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1300px) {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1232px) {
    display: grid;
    /* gap: 10px; */

    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1115px) {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 556px) {
    display: grid;
    gap: 10px;

    grid-template-columns: repeat(1, 1fr);
  }
`;
