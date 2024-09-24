import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

type BodyFooterProps = {
    children: React.ReactNode;
};

const BodyFooter = ({ children }: BodyFooterProps) => {
    return <Container>{children}</Container>;
};

export default BodyFooter;
