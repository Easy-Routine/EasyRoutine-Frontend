import AuthButton from "headful/AuthButton/AuthButton";
import React from "react";
import styles from "./GoogleButton.module.scss";

type GoogleButtonProps = React.ComponentProps<typeof AuthButton>;

const GoogleButton = (props: GoogleButtonProps) => {
    const handleGoogleLoginButtonClick = () => {
        window.open(`${process.env.REACT_APP_API_URL}/login`, "_self");
    };

    return (
        <AuthButton
            {...props}
            onClick={handleGoogleLoginButtonClick}
            className={styles.GoogleButton}
        />
    );
};

export default GoogleButton;
