import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
	body{
		background:${(props) => props.theme.color.background};
        color: ${(props) => props.theme.color.text.main};
	}
`;
