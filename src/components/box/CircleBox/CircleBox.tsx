import styled from "styled-components";

const CircleBox = styled.div<{ width: number; height: number }>`
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default CircleBox;
