import React, {useEffect, useState} from "react";
import CircleButton from "headful/CircleButton/CircleButton";
import styles from "./FloatingCircleButton.module.scss";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";

type FloatingCircleButtonProps = {
    onButtonClick?: () => void;
    width?: number;
    height?: number;
};

const FloatingCircleButton = ({
    onButtonClick,
    width = 40,
    height = 40,
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
            onClick={onButtonClick}
        >
            <CircleButton width={width} height={height}>
                <PlusIcon color={"var(--text-white)"} width={20} height={20} />
            </CircleButton>
        </span>
    );
};

export default FloatingCircleButton;
