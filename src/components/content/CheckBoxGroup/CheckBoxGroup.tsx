import React from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import SubmitButton from "./SubmitButton";
import Wrapper from "./Wrapper";

const Container = styled.div`
    width: 100%;
`;

type CheckBoxGroupProps = {
    children: React.ReactNode;
};

const CheckBoxGroup = ({ children }: CheckBoxGroupProps) => {
    return <Container>{children}</Container>;
};

export default CheckBoxGroup;

CheckBoxGroup.CheckBox = CheckBox;
CheckBoxGroup.SubmitButton = SubmitButton;
CheckBoxGroup.Wrapper = Wrapper;

// 스타일과 관련된 로직과 도메인관련된 로직을 분리하자
