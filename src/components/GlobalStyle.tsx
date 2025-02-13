/** @jsxImportSource @emotion/react */
import {Global, css} from "@emotion/react";
import React from "react";

const GlobalStyle = () => (
    <Global
        styles={css`
            /* Reset CSS */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            html,
            body {
                height: 100%;
                font-family: Arial, sans-serif; /* 기본 글꼴 설정 */
                line-height: 1.5; /* 기본 줄 높이 설정 */
                background-color: #f8f9fa; /* 배경색 설정 */
                color: #2d2d2d; /* 기본 텍스트 색상 설정 */
            }

            a {
                text-decoration: none;
                color: inherit; /* 링크 색상 설정 */
            }

            ul,
            ol {
                list-style: none; /* 리스트 스타일 제거 */
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin: 0;
                font-weight: normal; /* 제목의 기본 글꼴 두께 설정 */
            }

            img {
                max-width: 100%; /* 이미지의 최대 너비를 100%로 설정 */
                height: auto; /* 이미지의 높이를 자동으로 설정 */
            }

            /* 추가적인 리셋 스타일을 여기에 추가 */
        `}
    />
);

export default GlobalStyle;
