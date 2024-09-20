import React from "react";
import styled, { RuleSet } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;
`;

type TriggerProps = {
    onToggleAccordion: any;
    children: React.ReactNode;
    css?: RuleSet<object>;
};

const Trigger = ({ onToggleAccordion, children, css }: TriggerProps) => {
    return <Container onClick={onToggleAccordion}>{children}</Container>;
};

export default Trigger;
