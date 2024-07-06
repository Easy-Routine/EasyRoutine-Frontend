import {
    AccordionContext,
    AccordionContextType,
} from "context/AccordionContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { RuleSet } from "styled-components";

const Container = styled.div<{ height: string; css?: RuleSet<object> }>`
    ${({ css }) => css}
    height: ${(props) => props.height};
    overflow: hidden;
    transition: all 1s ease-in-out;
`;

type HiddenContentProps = {
    children: React.ReactNode;
    css?: RuleSet<object>;
};

const HiddenContent = ({ children, css }: HiddenContentProps) => {
    const { isOpen } = useContext(AccordionContext) as AccordionContextType;
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (containerRef.current) {
            setHeight(
                isOpen ? `${containerRef.current.scrollHeight}px` : "0px"
            );
        }
    }, [isOpen]);
    return (
        <Container ref={containerRef} height={height} css={css}>
            {children}
        </Container>
    );
};

export default HiddenContent;
