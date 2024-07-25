import { ChipContext, ChipContextType } from "context/ChipContext";
import React, { useContext } from "react";
import styled from "styled-components";

const Container = styled.div<{ isSelected: boolean }>`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme, isSelected }) =>
        isSelected ? theme.fontWeight.bold : theme.fontWeight.regular};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    border: ${({ theme, isSelected }) =>
        `1px solid ${
            isSelected ? theme.color.primary : theme.color.gray.light
        }`};
    padding: 8px 16px;
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.text.white : theme.color.gray.light};
    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.primary : "none"};
`;

type ButtonProps = {
    children: React.ReactNode;
    value: string;
};

const Button = ({ children, value }: ButtonProps) => {
    // 버튼을 클릭하면, 선택상태가 변경된다.
    const { handleButtonClick, selectedValue } = useContext(
        ChipContext
    ) as ChipContextType;

    const isSelected = value === selectedValue;

    return (
        <Container
            isSelected={isSelected}
            onClick={() => handleButtonClick(value)}
        >
            {children}
        </Container>
    );
};

export default Button;
