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
    onInputChange?: (value: string) => void;
    placeholder?: string;
};

const UnderlineInput = ({
    onInputChange,
    placeholder,
}: UnderlineInputProps) => {
    const [value, setValue] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onInputChange && onInputChange(e.target.value);
    };

    return (
        <Container>
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
            />
        </Container>
    );
};

export default UnderlineInput;
