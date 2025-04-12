import React from "react";
import styles from "./Logo.module.scss";
import classNames from "classnames";

type LogoProps = {
    size?: "medium" | "large";
};

const Logo = ({size = "medium"}: LogoProps) => {
    const combinedStyle = classNames(styles.Logo, {
        [styles.Medium]: size === "medium",
        [styles.Large]: size === "large",
    });

    return <div className={combinedStyle}>EASY ROUTINE</div>;
};

export default Logo;
