import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.input<{ width: number }>`
    width: ${({ width }) => `${width}px`};
    height: 22px;
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.gray.light};
    box-sizing: border-box;
    background-color: inherit;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    &:focus {
        border-color: ${({ theme }) => theme.color.primary};
    }
    z-index: 1000;
    text-align: center;
`;

type InputProps = {
    width?: number;
    value: string;
    onInputChange: (value: string) => void;
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
