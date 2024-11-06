import styled from "styled-components";

const CircleBox = styled.div<{ width: number; height: number; color?: string }>`
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    min-width: ${({ width }) => `${width}px`};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    background-color: ${({ theme, color }) =>
        color ? color : theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow};
    color: ${({ theme }) => theme.color.text.white};
`;

export default CircleBox;
