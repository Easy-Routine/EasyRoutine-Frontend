import React from "react";
import styled from "styled-components";

const Container = styled.div<{ color: string }>`
    display: flex;
    gap: 5px;
    color: ${(props) => props.color};
    font-size: ${({ theme }) => theme.fontSize.md};
    align-items: center;
`;

type IconTextProps = {
    children: React.ReactNode;
    color: string;
};

const IconText = ({ children, color }: IconTextProps) => {
    return <Container color={color}>{children}</Container>;
};

export default IconText;
