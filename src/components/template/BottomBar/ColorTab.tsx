import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ColorTabProvider from 'context/TabContext';
import Color from './Color';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`;

type ColorTabProps = {
    children: React.ReactNode;
    defaultValue: string;
};

const ColorTab = ({ children, defaultValue }: ColorTabProps) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleButtonClick = (value: string) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        console.log('값변경', selectedValue);
    }, [selectedValue]);

    return (
        <ColorTabProvider value={{ selectedValue, handleButtonClick }}>
            <Container>{children}</Container>
        </ColorTabProvider>
    );
};

export default ColorTab;

ColorTab.Color = Color;

// 스타일과 관련된 로직과 도메인관련된 로직을 분리하자
