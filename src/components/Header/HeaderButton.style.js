import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const ButtonGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: scroll;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`;
export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 25rem;
  height: 3.125rem;

  background-color: ${(props) =>
    props.background ? darkModeColors.accent : darkModeColors.foreground};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
  margin-top: 50px;
  font-size: 1em;
  @media (max-width: 768px) {
    height: 2.6;
    width: 16rem;
  }
`;

export const LeftContainerContent = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const IconContainer = styled.img`
  max-width: 100px;
  height: auto;
`;
