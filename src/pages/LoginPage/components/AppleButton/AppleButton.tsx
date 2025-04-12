import AuthButton from "headful/AuthButton/AuthButton";
import React from "react";
import styles from "./AppleButton.module.scss";
import AppleIcon from "assets/image/apple-white.svg";


const AppleButton = () => {
    const handleAppleLoginButtonClick = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/oauth2/authorization/apple`,
            "_self",
        );
    };

    return (
        <AuthButton
            onClick={handleAppleLoginButtonClick}
            className={styles.AppleButton}
            iconSrc={AppleIcon}
        >
            애플계정으로 시작하기
            </AuthButton>
    );
};

export default AppleButton;
