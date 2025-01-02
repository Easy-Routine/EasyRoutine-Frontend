import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {ReactComponent as QuestionIcon} from "assets/image/tooltip-question.svg";

const Container = styled.div`
    width: 24px;
    height: 24px;
    background-color: #ffd700;
    border-radius: 50%;
    position: relative;
`;
const ToolTipBox = styled.div<{isActive: boolean}>`
    width: 120px;
    max-width: 120px;
    max-height: 60px;
    position: absolute;
    left: -156px;
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
`;

type ToolTipProps = {
    text: string;
};

const ToolTip = ({text}: ToolTipProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleToolTipClick = () => {
        setIsActive(prev => !prev);
    };

    return (
        <Container onClick={handleToolTipClick}>
            <QuestionIcon />
            <ToolTipBox isActive={isActive}>{text}</ToolTipBox>
        </Container>
    );
};

export default ToolTip;
