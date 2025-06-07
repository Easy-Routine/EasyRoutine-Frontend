import Block from "headful/Block/Block";
import Logo from "headful/Logo/Logo";
import styles from "./LogoArea.module.scss";

const LogoArea = () => {
    return (
        <div className={styles.LogoArea}>
            <Logo />
        </div>
    );
};

export default LogoArea;
