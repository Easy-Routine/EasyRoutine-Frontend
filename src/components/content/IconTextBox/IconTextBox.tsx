import React from "react";
import IconText from "./IconText";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`;

type IconTextBoxProps = {
    children: React.ReactNode;
};

const IconTextBox = ({ children }: IconTextBoxProps) => {
    return <Container>{children}</Container>;
};

export default IconTextBox;

IconTextBox.IconText = IconText;
