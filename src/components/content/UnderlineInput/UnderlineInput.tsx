import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 35px;
    padding: 5px; 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray.light};
`;
const Input = styled.input`
    flex: 1;
    outline: none;
    border: none;
    background-color: inherit;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.text.black};
`;

type UnderlineInputProps = {
    value: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled: boolean;
};

const UnderlineInput = ({
    value,
    onInputChange,
    placeholder,
    disabled,
}: UnderlineInputProps) => {
    return (
        <Container>
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onInputChange}
                disabled={disabled}
            />
        </Container>
    );
};

export default UnderlineInput;
