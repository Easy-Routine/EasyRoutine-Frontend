import AccordionProvider from "context/AccordionContext";
import { useEffect, useState } from "react";
import Body from "./Body";
import Trigger from "./Trigger";
import styled, { RuleSet } from "styled-components";
import Header from "./Header";
import Motion from "./Motion";
import DeleteButton from "./DeleteButton";
import List from "./List";

type AccordionProps = {
    children: React.ReactNode;
    css?: RuleSet<object>;
    isCurrentAccordion?: boolean;
};

const Container = styled.div`
    position: relative;
    margin: -5px;
    padding: 5px;
    overflow: hidden;
    border-radius: ${(props) => props.theme.borderRadius.md};
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Accordion = ({ children, css, isCurrentAccordion }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [x, setX] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (isCurrentAccordion) {
            console.log(isCurrentAccordion);
            setIsOpen(true);
        }
    }, [isCurrentAccordion]);

    const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
        if (info.offset.x > 0) {
            // 오른쪽으로 드래그
            setX(0); // 원래 위치로 돌아가기
            setOpacity(0);
        } else {
            // 왼쪽으로 드래그
            setX(-65); // 왼쪽으로 이동하여 삭제 버튼 보이기
            setOpacity(1);
        }
    };

    const handleToggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionProvider
            value={{ isOpen, handleToggleAccordion, handleDragEnd, opacity, x }}
        >
            <Container>{children}</Container>
        </AccordionProvider>
    );
};
export default Accordion;

Accordion.List = List;
Accordion.Header = Header;
Accordion.Body = Body;
Accordion.Trigger = Trigger;
Accordion.Motion = Motion;
Accordion.DeleteButton = DeleteButton;
