import styled from "styled-components";

const TitleText = styled.div`
    flex: 1;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    height: 22px;
    text-align: center;
`;

export default TitleText;
