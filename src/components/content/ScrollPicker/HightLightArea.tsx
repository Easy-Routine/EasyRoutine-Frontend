import styled from "styled-components";

const HighlightArea = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 33.333%;
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    opacity: 0.15;
    z-index: 0;
    border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export default HighlightArea;
