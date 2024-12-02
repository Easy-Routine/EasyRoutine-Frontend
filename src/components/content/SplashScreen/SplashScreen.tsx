import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import LogoDescription from "../LogoDescription/LogoDescription";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.background.page};
    z-index: ${({ theme }) => theme.zIndex.error};
`;

const SplashContent = styled.div<{ isVisible: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 80%;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.5s
        ease-in-out forwards;
`;

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 스플래시 스크린을 0.5초 후에 나타나게 설정
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 250); // 즉시 나타나게 하려면 0으로 설정

        // 클린업 함수
        return () => clearTimeout(timer);
    }, []);

    return (
        <Container>
            <SplashContent isVisible={isVisible}>
                <LogoDescription />
            </SplashContent>
        </Container>
    );
};

export default SplashScreen;
