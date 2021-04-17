import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 2.5px;
	background-color: #03000B;
}

::-webkit-scrollbar
{
	width: 13px;
	background-color: #03000B;
}

::-webkit-scrollbar-thumb
{
	border-radius: 2.5px;
	-webkit-box-shadow: 0px 0px 25px 3px rgba(90,27,238,0.35);
	background-color: #5A1BEE;
}
`;

export default GlobalStyle