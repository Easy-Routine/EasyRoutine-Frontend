import styled from "styled-components";

const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    padding: 20px 0;
    text-align: center;
`;

export default Description;
