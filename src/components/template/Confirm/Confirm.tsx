import React from "react";
import Title from "./Title";
import Description from "./Description";
import ButtonBox from "./ButtonBox";
import CircleIconBox from "./CircleIconBox";
import ContentBox from "./ContentBox";
import styled from "styled-components";

type ConfirmProps = {
    children: React.ReactNode;
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Confirm = ({ children }: ConfirmProps) => {
    return <Container>{children}</Container>;
};

export default Confirm;

Confirm.Title = Title;
Confirm.Description = Description;
Confirm.ButtonBox = ButtonBox;
Confirm.IconBox = CircleIconBox;
Confirm.ContentBox = ContentBox;
