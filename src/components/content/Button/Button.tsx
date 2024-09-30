import styled from "styled-components";

const Button = styled.button<{ disabled?: boolean }>`
    width: 100%;
    height: 40px;
    min-height: 40px;
    border: none;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.text.white};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-family: "Noto Sans Korean", sans-serif;
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

export default Button;
