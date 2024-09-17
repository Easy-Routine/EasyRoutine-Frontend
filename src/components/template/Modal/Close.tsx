import React from 'react';
import styled, { RuleSet } from 'styled-components';
import { useContext } from 'react';
import { ModalContext, ModalContextType } from 'context/ModalContext';

type CloseProps = {
    children?: React.ReactNode;
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

const Close = ({ children, css }: CloseProps) => {
    const { handleCloseModal } = useContext(ModalContext) as ModalContextType;
    return (
        <Container css={css} onClick={handleCloseModal}>
            Cancel
        </Container>
    );
};

export default Close;
