import React from "react";
import styles from "./CircleButton.module.scss";

type CircleButtonProps = {
    children: React.ReactNode;
    width: number;
    height: number;
    onCircleButtonClick?: () => void;
};

const CircleButton = ({
    children,
    width,
    height,
    onCircleButtonClick,
}: CircleButtonProps) => {
    // 동적인 width, height, minWidth 값은 인라인 스타일로 처리합니다.
    const dynamicStyle: React.CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${width}px`,
    };

    return (
        <button
            className={styles.circleButton}
            style={dynamicStyle}
            onClick={onCircleButtonClick}
        >
            {children}
        </button>
    );
};

export default CircleButton;
