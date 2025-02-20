import React from "react";
import styles from "./BasicButton.module.scss";

type BasicButtonProps = {
    disabled?: boolean;
    children: React.ReactNode;
    onBasicButtonClick?: () => void;
};

const BasicButton = ({
    disabled,
    children,
    onBasicButtonClick,
}: BasicButtonProps) => {
    // 동적으로 변경되는 opacity는 인라인 스타일로 처리합니다.
    const dynamicStyle: React.CSSProperties = {
        opacity: disabled ? "0.5" : "1",
    };

    return (
        <button
            className={styles.basicButton}
            onClick={onBasicButtonClick}
            disabled={disabled}
            style={dynamicStyle}
        >
            {children}
        </button>
    );
};

export default BasicButton;
