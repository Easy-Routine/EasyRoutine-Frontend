import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}

	html, body, #root {
		height: 100%;
	}

	body {
		background: ${(props) => props.theme.color.background.page};
        color: ${(props) => props.theme.color.text.black};
		font-family: 'Noto Sans Korean', sans-serif;
	}
	input {
	    font-family: 'Noto Sans Korean', sans-serif;
	}
	button {
		font-family: 'Noto Sans Korean', sans-serif;
	}

`;
