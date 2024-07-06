import {
    AccordionContext,
    AccordionContextType,
} from "context/AccordionContext";
import React, { useContext } from "react";
import styled, { RuleSet } from "styled-components";

const Container = styled.div<{ css?: RuleSet<object> }>`
    ${({ css }) => css}
`;

type TriggerProps = {
    children: React.ReactNode;
    css?: RuleSet<object>;
};

const Trigger = ({ children, css }: TriggerProps) => {
    const { handleToggleAccordion } = useContext(
        AccordionContext
    ) as AccordionContextType;
    return (
        <Container css={css} onClick={handleToggleAccordion}>
            {children}
        </Container>
    );
};

export default Trigger;
