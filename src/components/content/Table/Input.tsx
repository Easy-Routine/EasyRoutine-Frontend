import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.input<{ width: number; disabled?: boolean }>`
    width: ${({ width }) => `${width}px`};
    height: 22px;
    outline: none;
    border: none;
    padding: 0;
    border-radius: 0;
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
    flex: 1;
`;

type InputProps = {
    width?: number;
    value: string;
    onInputChange?: (value: string) => void;
    disabled?: boolean;
};

const Input = ({
    width = 35,
    value,
    onInputChange,
    disabled = false,
}: InputProps) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // 빈 문자열일 경우 0으로 설정
        if (value === "") {
            setInputValue("0");
            onInputChange && onInputChange("0");
        } else if (/^\d*$/.test(value) && value.length <= 3) {
            // 현재 값이 0이고 새로운 값이 0이 아닐 경우
            if (inputValue === "0" && value !== "0") {
                setInputValue(value.substring(1)); // 0을 지우고 새로운 값으로 설정
                onInputChange && onInputChange(value.substring(1));
            } else {
                setInputValue(value);
                onInputChange && onInputChange(value);
            }
        }
    };

    // const handleKeyPress = (e:KeyboardEvent) => {
    //     if (!/[0-9]/.test(e.key)) {
    //         e.preventDefault();
    //     }
    // };

    return (
        <Container
            width={width}
            value={inputValue}
            onChange={handleInputChange}
            disabled={disabled}
            autoComplete="off"
            type="number"
            maxLength={3}
            pattern="[0-9]*"
        />
    );
};

export default Input;
