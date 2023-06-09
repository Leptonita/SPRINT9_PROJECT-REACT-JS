import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';


const colors = {
    lines: "#adadad",
    error: "#db1212",
    success: "#16d426",
    greyBorder: "#dd8500",
    greenish: "rgb(0, 169, 140)",
    yellowish: "rgb(255, 185, 29)"
}


//Web info modal
export const OverlayLogin = styled.div`
 /*height: 80vh;*/ position: fixed;
z-index: 10; 
margin-top: 115px;
background: rgba(255, 255, 255, 1);


top: 0;
left: 0;
width: 100vw;
display: flex;
justify-content:  center; /**/
`;

export const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 0;
`;

export const ImgDS = styled.img`
width: 80%;
margin-bottom: 30px;
`;

export const BtnCerrar = styled.div`
position: absolute;
top:10px;
right: 10px;
width: 32px;
height: 32px;
cursor: pointer;
background: #000019;
color: #767676;
font-size: 1.4rem;
font-weight: 300;
border: 2px solid #676767;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    color: white;
}
`;

export const Form = styled.form`
position: relative;
width: 450px;
border: 2px solid ${colors.greyBorder};
border-radius: 5px;
margin-top: 20px;
padding: 30px 40px;
background-color: #149458;

@media(max-width: 768px) {
    width: 90%;
    margin-right: 5px;
  }
`;

export const DivInput = styled.div`
	position: relative;
	z-index: 90;
    width: 90%;
    margin: 10px auto;
`;

export const Icon = styled.span`
position: absolute;
	right: 10px;
	top: 22px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

    ${props => (props.valid !== null) && css`
   opacity: 1;
   `}

`;

export const Input = styled.input`
width: 100%;
background-color: #fff;
border-radius: 3px;
height: 40px;
border: 3px solid transparent;
margin: 10px auto;
padding: 0 30px 0 10px;

&:focus {
    border: 3px solid ${colors.lines};
    outline: none;
}

${props => props.isValid === true && css`
border: 3px solid ${colors.success} ;
`}

${props => props.isValid === false && css`
border: 3px solid ${colors.error} ;
`}
`;

export const ErrorMessage = styled.div`
font-size: 12px;
color: ${colors.lines};
visibility: hidden;
${props => props.valid && css`
//visibility: hidden;
visibility: visible;
color: ${colors.success};

`}
${props => !props.valid && css`
visibility: visible;
`}
`;

export const DivBtns = styled.div`
width: 90%;
margin: 10px auto;
`;

export const BtnsIds = styled.button`
width: 100%;
height: 40px;
margin-bottom: 10px;
font-weight: bold;
background-color: ${colors.greyBorder};
border: 2px solid ${colors.lines};
color: white;
border-radius: 25px;
transition: all 0.5s ease-in-out;
cursor: pointer;

&:hover{
    background-color: ${colors.yellowish};
    border: 1px solid ${colors.greyBorder};
    color: black;
}
`;

export const BtnNewAcc = styled(BtnsIds)`
background-color: #b7ff0071;
`;

export const DivTxtPw = styled.div`
margin: 3px 0 1px 1px;
font-size: 0.8rem;
	color: #b7ff00;
`;

export const DivMessage = styled.div`
	color: yellow;
    text-align: center;
`;

export const DivTxt = styled.div`
margin: 5px 20px;
font-size: 0.8rem;
	color: yellow;
`;

export const NavLinkOlvido = styled(NavLink)`
color: ${colors.yellowish};
transition: all 0.3s ease-in-out;

&:hover {
    color: white;
}
`;
