import React, {HTMLAttributes} from "react";
import styles from "./AuthButton.module.scss";
import classNames from "classnames";

type AuthButtonProps = HTMLAttributes<HTMLButtonElement> & {
    iconSrc: string;
};

const AuthButton = ({iconSrc, ...props}: AuthButtonProps) => {
    const combinedStyle = classNames(styles.AuthButton, props.className);

    return (
        <button {...props} className={combinedStyle}>
            <img src={iconSrc} width={16} height={16} />
            {props.children}
        </button>
    );
};

export default AuthButton;
