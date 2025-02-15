/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React, {useEffect, useRef} from "react";

type BottomBoxProps = {
    children: React.ReactNode;
};

const BottomBox = ({children}: BottomBoxProps) => {
    const theme = useTheme();

    const bottomBoxStyle = css`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 65px;
        padding: 10px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        background-color: ${theme.color.background.box};
        border-top-left-radius: ${theme.borderRadius.lg};
        border-top-right-radius: ${theme.borderRadius.lg};
        box-shadow: ${theme.boxShadow};
        z-index: ${theme.zIndex.header};
    `;

    const bottomBoxRef = useRef<HTMLDivElement>(null);

    const updateBottomBarPosition = () => {
        const wrapElement = document.getElementById("wrap");
        if (wrapElement && bottomBoxRef.current) {
            const wrapRect = wrapElement.getBoundingClientRect();
            bottomBoxRef.current.style.width = `${wrapElement.clientWidth}px`;
            bottomBoxRef.current.style.left = `${wrapRect.left}px`; // wrap의 left 위치에 맞춤
            bottomBoxRef.current.style.bottom = `0px`; // window의 하단에 맞춤
        }
    };

    useEffect(() => {
        updateBottomBarPosition(); // 초기 위치 설정

        window.addEventListener("resize", updateBottomBarPosition); // 리사이즈 이벤트 리스너 추가
        return () => {
            window.removeEventListener("resize", updateBottomBarPosition); // 클린업 함수로 리스너 제거
        };
    }, []);

    return (
        <div css={bottomBoxStyle} ref={bottomBoxRef}>
            {children}
        </div>
    );
};

export default BottomBox;
