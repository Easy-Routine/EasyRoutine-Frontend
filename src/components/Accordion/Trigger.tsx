import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/image/arrow.svg';

const Container = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Trigger = () => {
    return (
        <Container>
            <ArrowIcon />
        </Container>
    );
};

export default Trigger;
