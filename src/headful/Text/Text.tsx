import React, {HTMLAttributes} from "react";
import styles from "./Text.module.scss";

type TextProps = {
    children: React.ReactNode;
    color?: string;
    size?: string | number;
    weight?: string;
    align?: React.CSSProperties["textAlign"];
} & HTMLAttributes<HTMLDivElement>;

const Text = ({children, color, size, weight, align, ...props}: TextProps) => {
    // 기본값은 CSS 변수로 설정된 값으로 대체할 수 있습니다.
    const dynamicStyle: React.CSSProperties = {
        fontSize: size || "var(--fontSize-md)",
        fontWeight: weight || "var(--fontWeight-regular)",
        color: color || "var(--text-black)",
        textAlign: align || "left",
    };

    return (
        <div {...props} className={styles.text} style={dynamicStyle}>
            {children}
        </div>
    );
};

export default Text;
