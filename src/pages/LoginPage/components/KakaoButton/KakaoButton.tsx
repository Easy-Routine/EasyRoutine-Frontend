import AuthButton from "headful/AuthButton/AuthButton";
import React from "react";
import styles from "./KakaoButton.module.scss";

type KakaoButtonProps = React.ComponentProps<typeof AuthButton>;

const KakaoButton = (props: KakaoButtonProps) => {
    const handleKakaoLoginButtonClick = () => {
        window.open(`${process.env.REACT_APP_API_URL}/login`, "_self");
    };

    return (
        <AuthButton
            {...props}
            onClick={handleKakaoLoginButtonClick}
            className={styles.KakaoButton}
        />
    );
};

export default KakaoButton;
