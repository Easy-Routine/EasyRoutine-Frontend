import React from "react";
import styles from "./Text.module.scss";

type TextProps = {
    children: React.ReactNode;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: React.CSSProperties["textAlign"];
};

const Text = ({
    children,
    color,
    fontSize,
    fontWeight,
    textAlign,
}: TextProps) => {
    // 기본값은 CSS 변수로 설정된 값으로 대체할 수 있습니다.
    const dynamicStyle: React.CSSProperties = {
        fontSize: fontSize || "var(--fontSize-md)",
        fontWeight: fontWeight || "var(--fontWeight-regular)",
        color: color || "var(--text-black)",
        textAlign: textAlign || "left",
    };

    return (
        <div className={styles.text} style={dynamicStyle}>
            {children}
        </div>
    );
};

export default Text;
