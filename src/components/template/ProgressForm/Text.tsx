import styled from 'styled-components';

const Text = styled.div`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export default Text;
