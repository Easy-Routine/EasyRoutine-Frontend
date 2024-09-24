import React from "react";
import styled, { RuleSet } from "styled-components";

type TriggerProps = {
    children?: React.ReactNode;
    onOpenModal: () => void;
    css?: RuleSet<object>;
};
type ContainerProps = {
    css?: RuleSet<object>;
};

const Container = styled.button<ContainerProps>`
    ${({ css }) => css}
`;

const Trigger = ({ children, css, onOpenModal }: TriggerProps) => {
    return (
        <Container css={css} onClick={onOpenModal}>
            {children}
        </Container>
    );
};

export default Trigger;
