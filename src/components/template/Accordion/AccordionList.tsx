import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

type AccordionListProps<T> = {
    data: T[];
    render: (value: T, key: number) => React.ReactNode;
};

const AccordionList = <T,>({ data, render }: AccordionListProps<T>) => {
    return <Container>{data.map(render)}</Container>;
};

export default AccordionList;
