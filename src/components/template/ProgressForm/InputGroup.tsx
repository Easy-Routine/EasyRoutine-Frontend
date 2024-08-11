import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input";
import Text from "./Text";
import { ProgressContext, ProgressContextType } from "context/ProgressContext";

const Container = styled.div<{ isCurrent: boolean; isCompleted: boolean }>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    height: 22px;

    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ isCurrent, isCompleted, theme }) =>
            isCurrent
                ? theme.color.primary
                : isCompleted
                ? theme.color.gray.dark
                : theme.color.background.box};
        opacity: 0.2;
        z-index: 3;
        border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
`;

type InputGroupProps = {
    children: React.ReactNode;
    id: string;
};

const InputGroup = ({ children, id }: InputGroupProps) => {
    const { currentItem, completedInputs } = useContext(
        ProgressContext
    ) as ProgressContextType;

    const isCurrent = currentItem.inputId === id;
    const isCompleted = completedInputs.includes(id);

    useEffect(() => {
        console.log(isCurrent);
    }, [isCurrent])

    return (
        <Container isCurrent={isCurrent} isCompleted={isCompleted}>
            {children}
        </Container>
    );
};

export default InputGroup;

InputGroup.Input = Input;
InputGroup.Text = Text;
