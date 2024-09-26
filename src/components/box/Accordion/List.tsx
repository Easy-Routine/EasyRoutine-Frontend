import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

type ListProps<T> = {
    data: T[];
    render: (value: T, key: number) => React.ReactNode;
};

const List = <T,>({ data, render }: ListProps<T>) => {
    return <Container>{data.map(render)}</Container>;
};

export default List;
