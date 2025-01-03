import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {ReactComponent as QuestionIcon} from "assets/image/tooltip-question.svg";

const Container = styled.div`
    width: 24px;
    height: 24px;
    background-color: #ffd700;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
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

    // 말풍선 꼬리 추가

    &::before {
        content: "";
        position: absolute;
        right: 100%; /* ToolTipBox의 왼쪽에 위치 */
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px; /* 꼬리의 크기 */
        border-style: solid;
        border-color: transparent ${({theme}) => theme.color.primary}
            transparent transparent; /* 꼬리 색상 */
        display: ${({toolTipPosition}) =>
            toolTipPosition === "right"
                ? "block"
                : "none"}; /* 왼쪽일 때만 표시 */
    }

    &::after {
        content: "";
        position: absolute;
        left: 100%; /* ToolTipBox의 오른쪽에 위치 */
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px; /* 꼬리의 크기 */
        border-style: solid;
        border-color: transparent transparent transparent
            ${({theme}) => theme.color.primary}; /* 꼬리 색상 */
        display: ${({toolTipPosition}) =>
            toolTipPosition === "left"
                ? "block"
                : "none"}; /* 오른쪽일 때만 표시 */
    }
`;

type ToolTipProps = {
    text: string;
    toolTipPosition: "left" | "right";
};

const ToolTip = ({text, toolTipPosition}: ToolTipProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleToolTipClick = () => {
        setIsActive(prev => !prev);
    };

    return (
        <Container onClick={handleToolTipClick}>
            <QuestionIcon />
            <ToolTipBox isActive={isActive} toolTipPosition={toolTipPosition}>
                {text}
            </ToolTipBox>
        </Container>
    );
};

export default ToolTip;
