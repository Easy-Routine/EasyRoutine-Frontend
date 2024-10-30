import React from "react";
import styled from "styled-components";

const Container = styled.div<{ type: "medium" | "large" }>`
    font-size: ${({ theme, type }) =>
        type === "medium" ? theme.fontSize.xxl : theme.fontSize.xxxl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.color.primary};
`;

type LogoProps = {
    type?: "medium" | "large";
};

const Logo = ({ type = "medium" }: LogoProps) => {
    return <Container type={type}>HEALPER</Container>;
};

export default Logo;
