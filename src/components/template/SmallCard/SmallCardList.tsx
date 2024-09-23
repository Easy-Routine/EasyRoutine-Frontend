import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
`;

type SmallCardListProps<T> = {
    data: T[];
    render: (value: T, key: number) => React.ReactNode;
};

const SmallCardList = <T,>({ data, render }: SmallCardListProps<T>) => {
    return <Container>{data.map(render)}</Container>;
};

export default SmallCardList;
