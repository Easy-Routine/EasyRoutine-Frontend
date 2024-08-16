import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    justify-content: space-between;
`;

const Header = styled.div`
    width: 100%;
    height: 22px;
`;

type ProgressLineListProps<T> = {
    data: T[];
    render: (value: T, key: number) => React.ReactNode;
};

const ProgressLineList = <T,>({ data,render }: ProgressLineListProps<T>) => {
    return <Container><Header />{data.map(render)}</Container>;
};

export default ProgressLineList;
