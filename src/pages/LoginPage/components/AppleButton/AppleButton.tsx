import AuthButton from "headful/AuthButton/AuthButton";
import React from "react";
import styles from "./AppleButton.module.scss";

type AppleButtonProps = React.ComponentProps<typeof AuthButton>;

const AppleButton = (props: AppleButtonProps) => {
    const handleAppleLoginButtonClick = () => {
        window.open(`${process.env.REACT_APP_API_URL}/login`, "_self");
    };

    return (
        <AuthButton
            {...props}
            onClick={handleAppleLoginButtonClick}
            className={styles.AppleButton}
        />
    );
};

export default AppleButton;
