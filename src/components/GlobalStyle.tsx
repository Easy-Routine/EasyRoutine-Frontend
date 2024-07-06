import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
	body{
		background:${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainTextColor};
	}
`;
