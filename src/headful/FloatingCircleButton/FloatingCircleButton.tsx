/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import CircleButton from "headful/CircleButton/CircleButton";
import React, {useEffect, useState} from "react";

type FloatingCircleButtonProps = {
    children: React.ReactNode;
    onFloatingCircleButtonClick: () => void;
    width: number;
    height: number;
};

const FloatingCircleButton = ({
    children,
    onFloatingCircleButtonClick,
    width,
    height,
}: FloatingCircleButtonProps) => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // 스크롤 다운
            setIsVisible(false);
        } else {
            // 스크롤 업
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const floatingCircleButtonStyle = css`
        position: fixed;
        bottom: ${isVisible ? "80px" : "-80px"};
        left: 50%;
        transform: translateX(-50%);
        z-index: ${theme.zIndex.floatingActionButton};
        transition: bottom 0.3s ease-in-out;

        border-radius: ${theme.borderRadius.circle};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: ${theme.color.text.white};
    `;

    return (
        <span
            css={floatingCircleButtonStyle}
            onClick={onFloatingCircleButtonClick}
        >
            <CircleButton width={width} height={height}>
                {children}
            </CircleButton>
        </span>
    );
};

export default FloatingCircleButton;
