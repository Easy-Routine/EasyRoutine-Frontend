import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { ReactComponent as MagnifyIcon } from "assets/image/magnify.svg";
import { ReactComponent as XIcon } from "assets/image/x.svg";

const Container = styled.div`
    width: 100%;
    height: 44px;
    min-height: 44px;
    padding: 15px; 20px;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: ${({ theme }) => theme.color.gray.lighter};
    
    
`;
const Input = styled.input`
    flex: 1;
    outline: none;
    border: none;
    background-color: inherit;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.color.gray.normal};
`;

type SearchProps = {
    value: string;
    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onInputClear?: () => void;
};

const Search = ({ onInputChange, onInputClear, value }: SearchProps) => {
    return (
        <Container>
            <MagnifyIcon width={20} height={20} />
            <Input
                type="text"
                placeholder="Search"
                value={value}
                onChange={onInputChange}
            />
            {value.length > 0 && (
                <XIcon width={12.5} height={12.5} onClick={onInputClear} />
            )}
        </Container>
    );
};

export default Search;
