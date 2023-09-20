import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25rem;
  height: 12.5rem;
  background-color: ${darkModeColors.foreground};
  border-radius: 8px;
  margin-top: 10px;

  @media (max-width: 1300px) {
    width: 21rem;
    height: 12.5rem;
  }

  @media (max-width: 768px) {
    width: 22rem;
    height: 12.5rem;
  }

  @media (max-width: 556px) {
    width: 25rem;
    height: 12.5rem;
  }

  @media (max-width: 400px) {
    width: 23rem;
    height: 12.5rem;
  }
  @media (max-width: 380px) {
    width: 22rem;
    height: 12.5rem;
  }
  @media (max-width: 300px) {
    width: 16rem;
    height: 12.5rem;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  width: 95%;
  height: 75%;
  /* background-color: red; */

  margin-top: 10px;
  /* background-color: blue; */
`;

export const TopDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BottomDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 95%;
  height: 20%;
  justify-content: space-between;
  margin-bottom: 4px;
  border-top: ${(props) =>
    `${props.borderWidth || 'none'} ${props.borderColor || 'black'}`};
  /* background-color: blue; */
  /* background-color: blue; */
`;

export const AddButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 1.875rem;
  background-color: ${(props) =>
    props.color || darkModeColors.accent}; //{darkModeColors.accent}
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding-bottom: 2px;
  padding-top: 2px;

  font-size: 1.2em;
`;
