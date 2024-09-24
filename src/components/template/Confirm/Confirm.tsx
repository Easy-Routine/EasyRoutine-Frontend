import React from "react";
import Title from "./Title";
import Description from "./Description";
import ButtonBox from "./ButtonBox";
import Box from "components/box/Box";
import CircleIconBox from "./CircleIconBox";
import ContentBox from "./ContentBox";

type ConfirmProps = {
    children: React.ReactNode;
};

const Confirm = ({ children }: ConfirmProps) => {
    return <Box width={"80%"}>{children}</Box>;
};

export default Confirm;

Confirm.Title = Title;
Confirm.Description = Description;
Confirm.ButtonBox = ButtonBox;
Confirm.IconBox = CircleIconBox;
Confirm.ContentBox = ContentBox;
