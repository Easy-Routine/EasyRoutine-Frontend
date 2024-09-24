import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.color.background.box};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    z-index: 200;
    width: 80%;
`;

type ContentProps = {
    children: React.ReactNode;
    isOpen: boolean;
};

const Content = ({ children, isOpen }: ContentProps) => {
    return <>{isOpen && <Container>{children}</Container>}</>;
};

export default Content;
