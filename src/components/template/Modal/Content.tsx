import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext, ModalContextType } from 'context/ModalContext';

type ContentProps = {
    children: React.ReactNode;
};

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
    padding: 25px;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    z-index: 200;
    height: 300px;
    width: 80%;
`;

const Content = ({ children }: ContentProps) => {
    const { isOpen } = useContext(ModalContext) as ModalContextType;
    return <>{isOpen && <Container>{children}</Container>}</>;
};

export default Content;
