import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
    display: flex;
    width: 100%;
`;

type TabProps = {
    children: React.ReactNode;
};

const Tab = ({ children }: TabProps) => {
    return <Container>{children}</Container>;
};

export default Tab;

Tab.Button = Button;

// 스타일과 관련된 로직과 도메인관련된 로직을 분리하자
