import React from "react";
import styled from "styled-components";

const Container = styled.div<{ width?: string }>`
    background-color: ${({ theme }) => theme.color.background.box};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    width: ${({ width }) => width};
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

type BoxProps = {
    children: React.ReactNode;
    width?: string;
};

const Box = ({ children, width }: BoxProps) => {
    return <Container width={width}>{children}</Container>;
};

export default Box;
