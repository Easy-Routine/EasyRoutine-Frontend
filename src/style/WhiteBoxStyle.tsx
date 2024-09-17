import { css } from 'styled-components';

export const WhiteBoxStyle = css`
    background-color: ${({ theme }) => theme.color.background.box};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
`;
