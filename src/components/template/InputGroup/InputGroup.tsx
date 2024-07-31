import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Text from "./Text";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

type InputGroupProps = {
    children: React.ReactNode;
};

const InputGroup = ({ children }: InputGroupProps) => {
    return <Container>{children}</Container>;
};

export default InputGroup;

InputGroup.Input = Input;
InputGroup.Text = Text;
