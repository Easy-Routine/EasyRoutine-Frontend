import AuthButton from "headful/AuthButton/AuthButton";
import React from "react";
import styles from "./KakaoButton.module.scss";
import KaKaoIcon from "assets/image/kakao-logo.svg";

const KakaoButton = () => {
    const handleKakaoLoginButtonClick = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/oauth2/authorization/kakao`,
            "_self",
        );
    };

    return (
        <AuthButton
            onClick={handleKakaoLoginButtonClick}
            className={styles.KakaoButton}
            iconSrc={KaKaoIcon}
        >
            카카오계정으로 시작하기
            </AuthButton>
    );
};

export default KakaoButton;
