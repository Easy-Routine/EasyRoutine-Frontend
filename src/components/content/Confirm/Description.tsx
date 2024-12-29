import styled from "styled-components";

const Description = styled.div`
    font-size: ${({theme}) => theme.fontSize.md};
    font-weight: ${({theme}) => theme.fontWeight.regular};
    padding: 20px 0;
    text-align: center;
    line-height: ${({theme}) => theme.fontSize.lg};
    word-break: keep-all;
`;

export default Description;
