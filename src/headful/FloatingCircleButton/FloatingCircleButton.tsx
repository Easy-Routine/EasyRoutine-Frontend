import React, {useEffect, useState} from "react";
import CircleButton from "headful/CircleButton/CircleButton";
import styles from "./FloatingCircleButton.module.scss";

type FloatingCircleButtonProps = {
    children: React.ReactNode;
    onFloatingCircleButtonClick?: () => void;
    width: number;
    height: number;
};

const FloatingCircleButton = ({
    children,
    onFloatingCircleButtonClick,
    width,
    height,
}: FloatingCircleButtonProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // 스크롤 다운: 버튼 숨김
            setIsVisible(false);
        } else {
            // 스크롤 업: 버튼 보임
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // 동적으로 변경되는 bottom 값은 인라인 스타일로 처리합니다.
    const dynamicStyle = {
        bottom: isVisible ? "80px" : "-80px",
    };

    return (
        <span
            className={styles.floatingCircleButton}
            style={dynamicStyle}
            onClick={onFloatingCircleButtonClick}
        >
            <CircleButton width={width} height={height}>
                {children}
            </CircleButton>
        </span>
    );
};

export default FloatingCircleButton;
