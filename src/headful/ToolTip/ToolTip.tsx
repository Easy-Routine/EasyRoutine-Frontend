/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import styled from "styled-components";
import {ReactComponent as QuestionIcon} from "assets/image/tooltip-question.svg";
import {css, useTheme} from "@emotion/react";

const ToolTipBox = styled.div<{
    isActive: boolean;
    toolTipPosition: "left" | "right";
}>`
    width: 120px;
    max-width: 120px;
    max-height: 80px;
    position: absolute;
    ${({toolTipPosition}) =>
        toolTipPosition === "left" ? "left: -145px;" : "right: -145px"};
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({theme}) => theme.color.primary};
    opacity: ${({isActive}) => (isActive ? 1 : 0)};
    font-size: 8px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    color: ${({theme}) => theme.color.text.white};
    line-height: 12px;
    border-radius: ${({theme}) => theme.borderRadius.xs};
    transition: all 0.3s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent ${({theme}) => theme.color.primary}
            transparent transparent;
        display: ${({toolTipPosition}) =>
            toolTipPosition === "right" ? "block" : "none"};
    }

    &::after {
        content: "";
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent transparent transparent
            ${({theme}) => theme.color.primary};
        display: ${({toolTipPosition}) =>
            toolTipPosition === "left" ? "block" : "none"};
    }
`;

type ToolTipProps = {
    text: string;
    toolTipPosition: "left" | "right";
};

const ToolTip = ({text, toolTipPosition}: ToolTipProps) => {
    const theme = useTheme();
    const [isActive, setIsActive] = useState(false);

    const handleToolTipClick = () => {
        setIsActive(prev => !prev);
    };

    const handleToolTipBoxClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // 클릭 이벤트 전파 방지
    };

    const toolTipStyle = css`
        width: 24px;
        height: 24px;
        background-color: #ffd700;
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const toolTipBoxStyle = css`
        width: 120px;
        max-width: 120px;
        max-height: 80px;
        position: absolute;
        ${toolTipPosition === "left" ? "left: -145px;" : "right: -145px"};
        top: 50%;
        transform: translateY(-50%);
        background-color: ${theme.color.primary};
        opacity: ${isActive ? 1 : 0};
        font-size: 8px;
        padding: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${theme.fontWeight.bold};
        color: ${theme.color.text.white};
        line-height: 12px;
        border-radius: ${theme.borderRadius.xs};
        transition: all 0.3s ease-in-out;

        &::before {
            content: "";
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border-width: 6px;
            border-style: solid;
            border-color: transparent ${theme.color.primary} transparent
                transparent;
            display: ${toolTipPosition === "right" ? "block" : "none"};
        }

        &::after {
            content: "";
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border-width: 6px;
            border-style: solid;
            border-color: transparent transparent transparent
                ${theme.color.primary};
            display: ${toolTipPosition === "left" ? "block" : "none"};
        }
    `;

    return (
        <div css={toolTipStyle} onClick={handleToolTipClick}>
            <QuestionIcon />
            <div
                css={toolTipBoxStyle}
                onClick={handleToolTipBoxClick} // ToolTipBox 클릭 이벤트
            >
                {text}
            </div>
        </div>
    );
};

export default ToolTip;
