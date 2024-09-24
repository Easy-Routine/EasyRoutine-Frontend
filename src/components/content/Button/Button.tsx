import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.text.white};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export default Button;
