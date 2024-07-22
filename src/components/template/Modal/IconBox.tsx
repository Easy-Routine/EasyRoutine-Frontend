import styled from "styled-components";

const IconBox = styled.div`
    width: 64px;
    height: 64px;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default IconBox;
