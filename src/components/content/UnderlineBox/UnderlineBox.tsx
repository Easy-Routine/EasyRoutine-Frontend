import React from "react";
import styled from "styled-components";
import TitleWrapper from "./Title";

const Container = styled.div`
    width: 100%;
    height: 45px;
    border-bottom: ${({ theme }) => `1px solid ${theme.color.gray.light}`};
    padding: 10px 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

type UnderlineBoxProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const UnderlineBox = ({ children, onClick }: UnderlineBoxProps) => {
    return <Container onClick={onClick}>{children}</Container>;
};

export default UnderlineBox;

UnderlineBox.TitleWrapper = TitleWrapper;
