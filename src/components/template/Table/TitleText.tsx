import styled from 'styled-components';

const TitleText = styled.div`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    height: 22px;
`;

export default TitleText;
