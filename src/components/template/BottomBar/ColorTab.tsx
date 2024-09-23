import React from "react";
import styled from "styled-components";
import Color from "./Color";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`;

type ColorTabProps = {
    children: React.ReactNode;
};

const ColorTab = ({ children }: ColorTabProps) => {
    return <Container>{children}</Container>;
};

export default ColorTab;

ColorTab.Color = Color;

// 스타일과 관련된 로직과 도메인관련된 로직을 분리하자
