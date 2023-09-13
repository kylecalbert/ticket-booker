import styled from 'styled-components';
import { darkModeColors } from '../../constants/colors';

export const ButtonGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  overflow-y: scroll;
`;
export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 50px;
  background-color: ${darkModeColors.accent};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
  margin-top: 50px;
  font-size: 16px;
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

// export const SmallTextContainer = styled.text`
//   color: ${darkModeColors.textPrimary};
//   text-decoration: none;
//   font-size: 14px;
//   margin-left: 10px;

//   font-weight: bold;
// `;

// export const RightContainerContent = styled.text`
//   color: ${darkModeColors.textPrimary};
//   text-decoration: none;
//   font-size: 14px;
//   font-weight: bold;
//   margin-right: 10px;
// `;

///the text can e made resuable
