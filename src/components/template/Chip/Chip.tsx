import React from "react";
import styled from "styled-components";

const Container = styled.div<{ isSelected: boolean }>`
    flex: 1;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme, isSelected }) =>
        isSelected ? theme.fontWeight.bold : theme.fontWeight.regular};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    border: ${({ theme, isSelected }) =>
        `1px solid ${isSelected ? theme.color.primary : theme.color.gray.light}`};
    padding: 8px 10px;
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.text.white : theme.color.gray.light};
    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.primary : "none"};
    text-align: center;
    box-sizing: border-box;
    min-width: 50px;
`;

type ChipProps = {
    children: React.ReactNode;
    value: string;
    selectedValue: string;
    onTabClick: (value: string) => void;
};

const Chip = ({ children, value, selectedValue, onTabClick }: ChipProps) => {
    // 버튼을 클릭하면, 선택상태가 변경된다.

    const isSelected = value === selectedValue;

    return (
        <Container isSelected={isSelected} onClick={() => onTabClick(value)}>
            {children}
        </Container>
    );
};

export default Chip;
