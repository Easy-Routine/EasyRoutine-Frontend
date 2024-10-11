import styled from "styled-components";
import { BackgroundColor, Color } from "type/Color";

const ColorMapper = {
    [Color.VIOLET]: [BackgroundColor.VIOLET],
    [Color.ORANGE]: [BackgroundColor.ORANGE],
    [Color.GREEN]: [BackgroundColor.GREEN],
    [Color.BLUE]: [BackgroundColor.BLUE],
    [Color.PINK]: [BackgroundColor.PINK],
};

const ImageBox = styled.div<{ $backgroundColor?: Color }>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 60px;
    border-radius: ${(props) => props.theme.borderRadius.md};
    background-color: ${({ $backgroundColor }) =>
        $backgroundColor ? ColorMapper[$backgroundColor] : "transparent"};
`;

export default ImageBox;
