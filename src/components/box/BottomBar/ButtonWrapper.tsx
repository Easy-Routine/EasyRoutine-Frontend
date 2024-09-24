import React from "react";
import styled from "styled-components";

const Container = styled.div<{ color?: string }>`
    width: 60%;
`;

type ButtonWrapperProps = {
    children: React.ReactNode;
    color?: string;
};

const ButtonWrapper = ({ children, color }: ButtonWrapperProps) => {
    return <Container color={color}>{children}</Container>;
};

export default ButtonWrapper;
