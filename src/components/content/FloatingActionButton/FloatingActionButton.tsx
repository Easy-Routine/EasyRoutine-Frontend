import { useState, useEffect } from "react";
import CircleBox from "components/box/CircleBox/CircleBox";
import { ReactComponent as PlusIcon } from "assets/image/plus.svg";
import styled from "styled-components";

// Container 컴포넌트에 isVisible을 prop으로 전달하여 스타일 적용
const Container = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    bottom: ${({ $isVisible }) => ($isVisible ? "80px" : "-80px")};
    left: 50%;
    transform: translateX(-50%);
    z-index: ${({ theme }) => theme.zIndex.FloatingActionButton};
    transition: bottom 0.3s ease-in-out;

    border-radius: ${({ theme }) => theme.borderRadius.circle};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Text = styled.div`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.gray.light};
    text-align: center;
    line-height: 18px;
`;

type FloatingActionButtonProps = {
    onButtonClick: () => void;
    text?: React.ReactNode;
};

const FloatingActionButton = ({
    onButtonClick,
    text,
}: FloatingActionButtonProps) => {
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
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Container $isVisible={isVisible} onClick={handleButtonClick}>
            <Text>{text}</Text>
            <CircleBox width={64} height={64}>
                <PlusIcon />
            </CircleBox>
        </Container>
    );
};

export default FloatingActionButton;
