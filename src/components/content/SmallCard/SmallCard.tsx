import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`;
const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;
`;
const ColumnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const BoldText = styled.div`
    font-size: 13px;
    font-weight: 600;
`;
const NormalText = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => props.theme.color.gray.normal};
`;

type SmallCardProps = {
    children: React.ReactNode;
    onCardClick?: () => void;
};
const SmallCard = ({ children, onCardClick }: SmallCardProps) => {
    return <Container onClick={onCardClick}>{children}</Container>;
};

export default SmallCard;

SmallCard.Container = Container;
SmallCard.ImageBox = ImageBox;
SmallCard.ColumnBox = ColumnBox;
SmallCard.BoldText = BoldText;
SmallCard.NormalText = NormalText;
