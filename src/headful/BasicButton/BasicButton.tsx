import React, {ButtonHTMLAttributes} from "react";
import styles from "./BasicButton.module.scss";

type BasicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const BasicButton = ({...props}: BasicButtonProps) => {
    // 동적으로 변경되는 opacity는 인라인 스타일로 처리합니다.
    const dynamicStyle: React.CSSProperties = {
        opacity: props.disabled ? "0.5" : "1",
    };

    return (
        <button
            className={styles.basicButton}
            {...props}
            style={{...dynamicStyle, ...props.style}}
        />
    );
};

export default BasicButton;
