import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Text from './Text';
import { ProgressContext, ProgressContextType } from 'context/ProgressContext';

const Container = styled.div<{ isCurrent: boolean; isCompleted: boolean }>`
    width: 100%;
    height: 22px;
    background-color: ${({ isCurrent, isCompleted, theme }) =>
        isCurrent ? theme.color.primary : isCompleted ? theme.color.gray.dark : theme.color.background.box};
    opacity: 0.2;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

type RowProps = {
    id: string;
};

const Row = ({ id }: RowProps) => {
    const { currentItem, completedInputs } = useContext(ProgressContext) as ProgressContextType;

    const isCurrent = currentItem.inputId === id;
    const isCompleted = completedInputs.includes(id);

    useEffect(() => {
        console.log(isCurrent);
    }, [isCurrent]);

    return <Container isCurrent={isCurrent} isCompleted={isCompleted} />;
};

export default Row;

Row.Input = Input;
Row.Text = Text;
