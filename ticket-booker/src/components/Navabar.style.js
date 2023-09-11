import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav` 
width: 95% ;
height: 80px ;
/* background-color: black ; */
display: flex ;
flex-direction: row ;
border-bottom: 1px solid #DBDBDB;
`
export const LeftContainer = styled.div `
display: flex ;
flex: 5%;
align-items: center ;
justify-content: center;
/* background-color: yellow ; */

`
export const LogoContainer = styled.div `
display:flex ;
flex-direction: column ;
align-items:center ;
justify-content: center ;
`

export const MiddleContainer = styled.div `
display: flex ;
justify-content:center ;
align-items: center;
flex: 90% ;
/* background-color: green ; */
`


export const LinkContainer = styled.div `
display:flex ;
flex-direction:row ;
align-items: center ;
/* background-color:red ; */
`



export const RightContainer = styled.div `
display: flex ;
flex: 5%;
align-items: center ;
justify-content: center;
/* background-color: purple ; */
`


export const ProfileContainer = styled.div `
display:flex ;
flex-direction: column ;
align-items:center ;
justify-content: center ;

`

export const LogoImage = styled.img `
margin:10px ;
max-width:100px ;
height:auto ; //height auto to allow the image to scale properly and not over stretch

`

export const ProfileImage  = styled.img `
margin:10px;
max-width:100px ;
height:auto ;
`

export const NavbarLink = styled(Link)`

color: white ;
text-decoration: none ;
padding:20px ;
font-size: 18px ;




`