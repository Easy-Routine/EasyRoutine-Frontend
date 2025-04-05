import React, {HTMLAttributes} from "react";
import styles from "./AuthButton.module.scss";
import classNames from "classnames";

type AuthButtonProps = HTMLAttributes<HTMLButtonElement> & {};

const AuthButton = (props: AuthButtonProps) => {
    const combinedStyle = classNames(styles.AuthButton, props.className);

    return <button {...props} className={combinedStyle} />;
};

export default AuthButton;
