import { TabContext, TabContextType } from "context/TabContext";
import React, { useContext } from "react";
import styled from "styled-components";

const Container = styled.div<{ isSelected: boolean }>`
    flex: 1;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme, isSelected }) =>
        isSelected ? theme.fontWeight.bold : theme.fontWeight.regular};
    border-bottom: ${({ theme, isSelected }) =>
        `1px solid ${
            isSelected ? theme.color.primary : theme.color.gray.light
        }`};
    padding: 15px 0;
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.primary : theme.color.text.black};
    text-align: center;
`;

type ButtonProps = {
    children: React.ReactNode;
    value: string;
};

const Button = ({ children, value }: ButtonProps) => {
    // 버튼을 클릭하면, 선택상태가 변경된다.
    const { handleButtonClick, selectedValue } = useContext(
        TabContext
    ) as TabContextType;

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
