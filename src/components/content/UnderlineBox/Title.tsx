import styled from "styled-components";

const TitleWrapper = styled.div`
    display: flex;
    gap: 10px;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export default TitleWrapper;
