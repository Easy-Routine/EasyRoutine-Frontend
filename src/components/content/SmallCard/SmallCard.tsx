import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useLongPress } from "use-long-press";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer; // 클릭 가능한 느낌을 주기 위해 추가
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
    display: flex;
    align-items: center;
`;

const ImageText = styled.div`
    display: flex;
    gap: 10px;
`;

const Between = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

type SmallCardProps = React.HTMLProps<HTMLDivElement> & {
    onCardClick?: () => void;
    onLongPress?: () => void;
};

const SmallCard = ({ children, onCardClick, onLongPress }: SmallCardProps) => {
    const isLongPress = useRef(false);

    const handleSmallCardClick = () => {
        onCardClick && onCardClick();
    };

    const longPressBind = useLongPress(
        () => {
            isLongPress.current = true;
            onLongPress && onLongPress();
            console.log("onLongPress", isLongPress.current);
        },
        {
            onFinish: () => {
                // isLongPress.current = false;
                console.log("onLongPressFinish", isLongPress.current);
            },
        }
    );

    return (
        <Container onClick={handleSmallCardClick} {...longPressBind()}>
            {children}
        </Container>
    );
};

export default SmallCard;

SmallCard.Container = Container;
SmallCard.ImageBox = ImageBox;
SmallCard.ColumnBox = ColumnBox;
SmallCard.BoldText = BoldText;
SmallCard.NormalText = NormalText;
SmallCard.ImageText = ImageText;
SmallCard.Between = Between;
