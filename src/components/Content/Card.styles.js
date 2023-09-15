import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 400px;
  height: 200px;
  background-color: ${darkModeColors.foreground};
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  width: 20%;
  height: 75%;
  /* background-color: red; */
  border-bottom: 1px solid black;

  margin-top: 10px;
  background-color: blue;
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
  width: 60px;
  height: 30px;
  background-color: ${(props) =>
    props.color || darkModeColors.accent}; //{darkModeColors.accent}
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding-bottom: 2px;
  padding-top: 2px;

  font-size: 16px;
`;

// export const LeftFooterContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   margin-left: 10px;
//   width: 90%;
//   height: 20%;

//   margin-top: 10px;
//   background-color: blue;
// `;

// export const RightFooterContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   margin-left: 10px;
//   width: 90%;
//   height: 20%;

//   margin-top: 10px;
//   background-color: blue;
// `;

const TitleContainer = styled.div``;
