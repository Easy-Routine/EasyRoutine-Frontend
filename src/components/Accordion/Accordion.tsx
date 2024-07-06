import AccordionProvider from "context/AccordionContext";
import { useState } from "react";
import HiddenContent from "./HiddenContent";
import Trigger from "./Trigger";
import styled, { RuleSet } from "styled-components";

type AccordionProps = {
    children: React.ReactNode;
    css?: RuleSet<object>;
};

const Container = styled.div<{ css?: RuleSet<object> }>`
    ${({ css }) => css}
`;

const Accordion = ({ children, css }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionProvider value={{ isOpen, handleToggleAccordion }}>
            <Container css={css}>{children}</Container>
        </AccordionProvider>
    );
};
export default Accordion;

Accordion.HiddenContent = HiddenContent;
Accordion.Trigger = Trigger;
