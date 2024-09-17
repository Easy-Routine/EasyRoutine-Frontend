import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import Input from './Input';
import OrderText from './OrderText';
import TitleText from './TitleText';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

type TableProps = {
    children: React.ReactNode;
};

const Table = ({ children }: TableProps) => {
    return <Container>{children}</Container>;
};

export default Table;

Table.Column = Column;
Table.Input = Input;
Table.OrderText = OrderText;
Table.TitleText = TitleText;
