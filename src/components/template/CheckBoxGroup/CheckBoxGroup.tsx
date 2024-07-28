import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckBoxGroupProvider from "context/CheckBoxGroupContext";
import CheckBox from "./CheckBox";
import SubmitButton from "./SubmitButton";

const Container = styled.div``;

type CheckBoxGroupProps = {
    children: React.ReactNode;
};

const CheckBoxGroup = ({ children }: CheckBoxGroupProps) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleButtonClick = (value: string) => {
        const newState = structuredClone(selectedValues);
        if (selectedValues.includes(value)) {
            setSelectedValues(
                newState.filter((item: string) => item !== value)
            );
        } else {
            newState.push(value);
            setSelectedValues(newState);
        }
    };

    useEffect(() => {
        console.log("값변경", selectedValues);
    }, [selectedValues]);

    return (
        <CheckBoxGroupProvider value={{ selectedValues, handleButtonClick }}>
            <Container>{children}</Container>
        </CheckBoxGroupProvider>
    );
};

export default CheckBoxGroup;

CheckBoxGroup.CheckBox = CheckBox;
CheckBoxGroup.SubmitButton = SubmitButton;

// 스타일과 관련된 로직과 도메인관련된 로직을 분리하자
