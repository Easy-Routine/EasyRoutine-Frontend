import styled from "styled-components";

const SimpleTextEmptyView = styled.div`
    padding: 15px 0;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.color.gray.light};
    text-align: center;
`;

export default SimpleTextEmptyView;
