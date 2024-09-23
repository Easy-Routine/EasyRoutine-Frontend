import React from "react";
import styled, { RuleSet } from "styled-components";

type CloseProps = {
    children?: React.ReactNode;
    onCloseModal: () => void;
    css?: RuleSet<object>;
};
type ContainerProps = {
    css?: RuleSet<object>;
};

const Container = styled.button<ContainerProps>`
    ${({ css }) => css}
    border: none;
    background: none;
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const Close = ({ children, onCloseModal, css }: CloseProps) => {
    return (
        <Container css={css} onClick={onCloseModal}>
            {children}
        </Container>
    );
};

export default Close;
