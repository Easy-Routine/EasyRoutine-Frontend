import { AccordionContext, AccordionContextType } from 'context/AccordionContext';
import React, { useContext } from 'react';
import styled, { RuleSet } from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;
`;

type TriggerProps = {
    children: React.ReactNode;
    css?: RuleSet<object>;
};

const Trigger = ({ children, css }: TriggerProps) => {
    const { handleToggleAccordion } = useContext(AccordionContext) as AccordionContextType;
    return <Container onClick={handleToggleAccordion}>{children}</Container>;
};

export default Trigger;
