import styled from "styled-components";

const ImageBox = styled.div<{ $backgroundColor?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 60px;
    border-radius: ${(props) => props.theme.borderRadius.md};
    background-color: ${(props) => props.$backgroundColor};
`;

export default ImageBox;
