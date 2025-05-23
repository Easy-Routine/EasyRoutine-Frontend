import React from "react";
import styled from "styled-components";

const Container = styled.div<{ isSelected: boolean }>`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme, isSelected }) =>
        isSelected ? theme.fontWeight.bold : theme.fontWeight.regular};
    border-bottom: ${({ theme, isSelected }) =>
        `1px solid ${isSelected ? theme.color.primary : null}`};
    padding: 15px 0;
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.primary : theme.color.text.black};
    text-align: center;
`;

type ButtonProps = {
    children: React.ReactNode;
    value: string;
    selectedValue: string;
    onButtonClick: (value: string) => void;
};

const Button = ({
    children,
    value,
    selectedValue,
    onButtonClick,
}: ButtonProps) => {
    // 버튼을 클릭하면, 선택상태가 변경된다.

    const isSelected = value === selectedValue;

    return (
        <Container isSelected={isSelected} onClick={() => onButtonClick(value)}>
            {children}
        </Container>
    );
};

export default Button;
