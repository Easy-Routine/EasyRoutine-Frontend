import React from "react";
import styled from "styled-components";
import Column from "./Column";
import ImageBox from "./ImageBox";
import Title from "./Title";
import Description from "./Description";
import ProgressBar from "./ProgressBar";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`;

type CardProps = {
    children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
    return <Container>{children}</Container>;
};

export default Card;

Card.ImageBox = ImageBox;
Card.Column = Column;
Card.Title = Title;
Card.Description = Description;
Card.ProgressBar = ProgressBar;
