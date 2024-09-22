import React from "react";
import styled from "styled-components";
import Column from "./Column";
import Input from "./Input";
import OrderText from "./OrderText";
import TitleText from "./TitleText";
import Row from "./Row";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
Table.Row = Row;
