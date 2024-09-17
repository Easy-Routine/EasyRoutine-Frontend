import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TabProvider from 'context/TabContext';
import Button from './Button';

const Container = styled.div`
    display: flex;
    width: 80%;
`;

type TabProps = {
    children: React.ReactNode;
    defaultValue: string;
};

const Tab = ({ children, defaultValue }: TabProps) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleButtonClick = (value: string) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        console.log('값변경', selectedValue);
    }, [selectedValue]);

    return (
        <TabProvider value={{ selectedValue, handleButtonClick }}>
            <Container>{children}</Container>
        </TabProvider>
    );
};

export default Tab;

Tab.Button = Button;

// 스타일과 관련된 로직과 도메인관련된 로직을 분리하자
