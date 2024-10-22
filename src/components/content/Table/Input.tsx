import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.input<{ width: number; disabled?: boolean }>`
    width: ${({ width }) => `${width}px`};
    height: 22px;
    outline: none;
    border: none;
    border-bottom: 2px solid
        ${({ theme, disabled }) => (disabled ? "none" : theme.color.gray.light)};
    box-sizing: border-box;
    background-color: inherit;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    &:focus {
        border-color: ${({ theme }) => theme.color.primary};
    }
    text-align: center;
    color: ${({ theme }) => theme.color.text.black};
`;

type InputProps = {
    width?: number;
    value: string;
    onInputChange?: (value: string) => void;
    disabled?: boolean;
};

const Input = ({
    width = 18,
    value,
    onInputChange,
    disabled = false,
}: InputProps) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onInputChange?.(e.target.value);
    };

    return (
        <Container
            width={width}
            value={inputValue}
            onChange={handleInputChange}
            disabled={disabled}
        />
    );
};

export default Input;
