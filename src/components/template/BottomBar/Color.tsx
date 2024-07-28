import { TabContext, TabContextType } from "context/TabContext";
import React, { useContext } from "react";
import styled from "styled-components";

const Container = styled.div<{ isSelected: boolean; backgroundColor: string }>`
    width: 35px;
    height: 35px;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: ${({ theme, isSelected }) =>
        isSelected ? `5px solid ${theme.color.primary}` : "none"};
    box-sizing: border-box;
`;

type ColorProps = {
    value: string;
    backgroundColor: string;
};

const Color = ({ value, backgroundColor }: ColorProps) => {
    // 버튼을 클릭하면, 선택상태가 변경된다.
    const { handleButtonClick, selectedValue } = useContext(
        TabContext
    ) as TabContextType;

    const isSelected = value === selectedValue;

    return (
        <Container
            isSelected={isSelected}
            backgroundColor={backgroundColor}
            onClick={() => handleButtonClick(value)}
        />
    );
};

export default Color;
