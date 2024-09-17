import React from 'react';
import { WhiteBoxStyle } from 'style/WhiteBoxStyle';
import styled from 'styled-components';
import Trigger from './Trigger';

type AccordionProps = {
    children: React.ReactNode;
};

const Container = styled.div`
    ${WhiteBoxStyle}
    padding: 15px
    display: flex;
`;

// 상태에 따라, 다르게 표현 할 수 있는 컴포넌트
const Accordion = ({ children }: AccordionProps) => {
    return <Container>{children}</Container>;
};

export default Accordion;

Accordion.Trigger = Trigger;
