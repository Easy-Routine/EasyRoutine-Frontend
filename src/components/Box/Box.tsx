import styled, { RuleSet, css } from 'styled-components';

// 커스텀 스타일을 추가할 수 있는 컴포넌트
const Box = styled.div<{ css?: RuleSet<object> }>`
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background-color: ${({ theme }) => theme.color.background.box};

    ${({ css }) => css && css}
`;

export default Box;
