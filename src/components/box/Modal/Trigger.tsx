import React from "react";
import styled, { RuleSet } from "styled-components";

type TriggerProps = {
    children?: React.ReactNode;
    onTriggerClick: () => void;
    css?: RuleSet<object>;
};
type ContainerProps = {
    css?: RuleSet<object>;
};

const Container = styled.button<ContainerProps>`
    ${({ css }) => css}
`;

const Trigger = ({ children, css, onTriggerClick }: TriggerProps) => {
    return (
        <Container css={css} onClick={onTriggerClick}>
            {children}
        </Container>
    );
};

export default Trigger;
