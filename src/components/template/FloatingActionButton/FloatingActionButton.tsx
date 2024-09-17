import React, { useState, useEffect } from 'react';
import IconBox from '../IconBox/IconBox';
import { ReactComponent as PlusIcon } from 'assets/image/plus.svg';
import styled from 'styled-components';

const Container = styled.div<{ isVisible: boolean }>`
    position: fixed;
    bottom: ${({ isVisible }) => (isVisible ? '80px' : '-80px')};
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    transition: bottom 0.3s ease-in-out;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
`;

type FloatingActionButtonProps = {
    onButtonClick: () => void;
};

const FloatingActionButton = ({ onButtonClick }: FloatingActionButtonProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // 스크롤 다운
            setIsVisible(false);
        } else {
            // 스크롤 업
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    const handleButtonClick = () => {
        onButtonClick();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Container isVisible={isVisible} onClick={handleButtonClick}>
            <IconBox width={64} height={64}>
                <PlusIcon />
            </IconBox>
        </Container>
    );
};

export default FloatingActionButton;
