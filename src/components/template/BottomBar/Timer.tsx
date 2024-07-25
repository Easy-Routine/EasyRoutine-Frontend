import React from "react";
import styled from "styled-components";

const Container = styled.div<{ color?: string }>`
    width: 40%;
    height: 40px;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.background.box};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ color, theme }) => color || theme.color.text.black};
    text-align: center;
`;

type TimerProps = {
    children: React.ReactNode;
    color?: string;
};

const Timer = ({ children, color }: TimerProps) => {
    return <Container color={color}>{children}</Container>;
};

export default Timer;
