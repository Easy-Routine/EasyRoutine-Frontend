import AuthButton from "headful/AuthButton/AuthButton";
import React from "react";
import styles from "./GoogleButton.module.scss";
import GoogleIcon from "assets/image/google-logo.svg";

const GoogleButton = () => {
    const handleGoogleLoginButtonClick = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/oauth2/authorization/google`,
            "_self",
        );
    };

    return (
        <AuthButton
            
            onClick={handleGoogleLoginButtonClick}
            className={styles.GoogleButton}
            iconSrc={GoogleIcon}
        >
            구글계정으로 시작하기
            </AuthButton>
    );
};

export default GoogleButton;
