import AuthButton from "headful/AuthButton/AuthButton";
import React from "react";
import styles from "./NaverButton.module.scss";
import NaverIcon from "assets/image/naver.png";

const NaverButton = () => {
    const handleNaverLoginButtonClick = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/oauth2/authorization/naver`,
            "_self",
        );
    };

    return (
        <AuthButton
        
            onClick={handleNaverLoginButtonClick}
            className={styles.NaverButton}
            iconSrc={NaverIcon}
        >
            네이버계정으로 시작하기
            </AuthButton>
    );
};

export default NaverButton;
