import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.input<{ width: number }>`
    width: ${({ width }) => `${width}px`};
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.gray.light};
    background-color: inherit;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    &:focus {
        border-color: ${({ theme }) => theme.color.primary};
    }
`;

type InputProps = {
    width?: number;
    value: string;
    onInputChange: (value: string) => void;
};

const Input = ({ width = 16, value, onInputChange }: InputProps) => {
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
        />
    );
};

export default Input;
