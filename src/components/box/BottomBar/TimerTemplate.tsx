import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import ButtonWrapper from "./ButtonWrapper";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`;

type TimerTemplateProps = {
    children: React.ReactNode;
};

const TimerTemplate = ({ children }: TimerTemplateProps) => {
    return <Container>{children}</Container>;
};

export default TimerTemplate;

TimerTemplate.Timer = Timer;
TimerTemplate.ButtonWrapper = ButtonWrapper;
