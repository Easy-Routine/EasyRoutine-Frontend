import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
`;

type ColumnProps<T> = {
    header: React.ReactNode;
    data: T[];
    render: (value: T, key: number) => React.ReactNode;
};

const Column = <T,>({ header, data, render }: ColumnProps<T>) => {
    return (
        <Container>
            {header}
            {data.map(render)}
        </Container>
    );
};

export default Column;
