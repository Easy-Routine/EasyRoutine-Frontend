import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`;

type InputGroupListProps<T> = {
    data: T[];
    render: (value: T, key: number) => React.ReactNode;
};

const InputGroupList = <T,>({ data, render }: InputGroupListProps<T>) => {
    return <Container>{data.map(render)}</Container>;
};

export default InputGroupList;
