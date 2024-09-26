import styled from "styled-components";

const TitleText = styled.div`
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    padding: 8px 16px;
    display: flex;
    align-items: center;
`;

export default TitleText;
