import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NotoSansKoreanBold from "assets/fonts/NotoSansKR-Bold.ttf";
import NotoSansKoreanSemiBold from "assets/fonts/NotoSansKR-SemiBold.ttf";
import NotoSansKoreanRegular from "assets/fonts/NotoSansKR-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
	${reset}
// 	@font-face {
//     font-family: "Noto Sans Korean";
//     src: url(${NotoSansKoreanRegular}) format("woff2");
//     font-weight: 400;
//     font-style: normal;
//     // font-display: swap;
// }

// @font-face {
//     font-family: "Noto Sans Korean";
//     src: url(${NotoSansKoreanSemiBold}) format("woff2");
//     font-weight: 600;
//     font-style: normal;
//     // font-display: swap;
// }

// @font-face {
//     font-family: "Noto Sans Korean";
//     src: url(${NotoSansKoreanBold}) format("woff2");
//     font-weight: 700; /* ExtraBold */
//     font-style: normal;
//     // font-display: swap;
// }

	
	* {
		overscroll-behavior: none;
	}
	html, body, #root {
		height: 100%;
		user-select: none;
		-webkit-user-select: none; /* Safari */
    	-moz-user-select: none; /* Firefox */
    	-ms-user-select: none;
	}

	body {
		background: ${(props) => props.theme.color.background.page};
        color: ${(props) => props.theme.color.text.black};
		// font-family: 'Noto Sans Korean', sans-serif;
		font-family: sans-serif;
	}
	input {
	    // font-family: 'Noto Sans Korean', sans-serif;
		font-family: sans-serif;
	}
	button {
		// font-family: 'Noto Sans Korean', sans-serif;
		font-family: sans-serif;
	}

`;
