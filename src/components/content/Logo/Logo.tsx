import React from "react";
import styled from "styled-components";

const Container = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.color.primary};
`;

const Logo = () => {
    return <Container>HEALPER</Container>;
};

export default Logo;
