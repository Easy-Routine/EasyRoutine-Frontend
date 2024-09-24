import styled from "styled-components";

const OrderText = styled.div`
    display: flex;
    align-items: center;

    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    width: 100%;
    height: 19px;
`;

export default OrderText;
