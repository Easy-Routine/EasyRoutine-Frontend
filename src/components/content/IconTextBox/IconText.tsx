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
    onIconTextClick?: () => void;
};

const IconText = ({ children, color, onIconTextClick }: IconTextProps) => {
    return (
        <Container color={color} onClick={onIconTextClick}>
            {children}
        </Container>
    );
};

export default IconText;
