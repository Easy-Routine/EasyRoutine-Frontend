import React from 'react';
import styled from 'styled-components';
import TitleText from './TitleText';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    justify-content: space-between;
`;

type ColumnProps<T> = {
    label: string;
    data: T[];
    render: (value: T, key: number) => React.ReactNode;
};

const Column = <T,>({ label, data, render }: ColumnProps<T>) => {
    return (
        <Container>
            <TitleText>{label}</TitleText>
            {data.map(render)}
        </Container>
    );
};

export default Column;
