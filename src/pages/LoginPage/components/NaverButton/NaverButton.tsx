import AuthButton from "headful/AuthButton/AuthButton";
import React from "react";
import styles from "./NaverButton.module.scss";

type NaverButtonProps = React.ComponentProps<typeof AuthButton>;

const NaverButton = (props: NaverButtonProps) => {
    const handleNaverLoginButtonClick = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/oauth2/authorization/naver`,
            "_self",
        );
    };

    return (
        <AuthButton
            {...props}
            onClick={handleNaverLoginButtonClick}
            className={styles.NaverButton}
        />
    );
};

export default NaverButton;
