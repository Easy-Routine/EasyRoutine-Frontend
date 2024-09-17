import React from 'react';
import styled, { RuleSet } from 'styled-components';
import { useContext } from 'react';
import { ModalContext, ModalContextType } from 'context/ModalContext';

type TriggerProps = {
    children?: React.ReactNode;
    css?: RuleSet<object>;
};
type ContainerProps = {
    css?: RuleSet<object>;
};

const Container = styled.button<ContainerProps>`
    ${({ css }) => css}
`;

const Trigger = ({ children, css }: TriggerProps) => {
    const { handleOpenModal } = useContext(ModalContext) as ModalContextType;
    return (
        <Container css={css} onClick={handleOpenModal}>
            {children}
        </Container>
    );
};

export default Trigger;
