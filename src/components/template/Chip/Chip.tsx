import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChipProvider from 'context/ChipContext';
import Button from './Button';

const Container = styled.div`
    display: flex;
    gap: 10px;
`;

type ChipProps = {
    children: React.ReactNode;
    defaultValue: string;
};

const Chip = ({ children, defaultValue }: ChipProps) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleButtonClick = (value: string) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        console.log('값변경', selectedValue);
    }, [selectedValue]);

    return (
        <ChipProvider value={{ selectedValue, handleButtonClick }}>
            <Container>{children}</Container>
        </ChipProvider>
    );
};

export default Chip;

Chip.Button = Button;

// 스타일과 관련된 로직과 도메인관련된 로직을 분리하자
