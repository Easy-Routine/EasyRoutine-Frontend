import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NotoSansRegular from "assets/fonts/NotoSansKR-Regular.ttf";
import NotoSansBold from "assets/fonts/NotoSansKR-Bold.ttf";
import NotoSansSemiBold from "assets/fonts/NotoSansKR-SemiBold.ttf";

const fontPath = process.env;

console.log(fontPath, "fontPath");

export const GlobalStyle = createGlobalStyle`
	${reset}
	@font-face {
		font-family: 'Noto Sans Korean';
		src: url(${NotoSansRegular}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Noto Sans Korean';
		src: url(${NotoSansBold}) format('truetype');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'Noto Sans Korean';
		src: url(${NotoSansSemiBold}) format('truetype');
		font-weight: 700; // ExtraBold
		font-style: normal;
	}



	body {
		background: ${(props) => props.theme.color.background.page};
        color: ${(props) => props.theme.color.text.black};
		font-family: 'Noto Sans Korean', sans-serif;
	}
	input {
	    font-family: 'Noto Sans Korean', sans-serif;
	}
`;
