import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MagnifyIcon } from 'assets/image/magnify.svg';
import { ReactComponent as XIcon } from 'assets/image/x.svg';

const Container = styled.div`
    width: 100%;
    height: 44px;
    padding: 15px; 20px;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    display: flex;
    justify-content: space-between;
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
    onInputChange?: (value: string) => void;
};

const Search = ({ onInputChange }: SearchProps) => {
    const [value, setValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onInputChange && onInputChange(e.target.value);
    };
    const handleXClick = () => {
        setValue('');
        onInputChange && onInputChange('');
    };

    return (
        <Container>
            <MagnifyIcon />
            <Input type="text" placeholder="Search" value={value} onChange={handleInputChange} />
            <XIcon onClick={handleXClick} />
        </Container>
    );
};

export default Search;
