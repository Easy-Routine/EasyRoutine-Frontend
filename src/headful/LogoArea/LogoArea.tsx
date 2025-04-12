import Block from "headful/Block/Block";
import Logo from "headful/Logo/Logo";
import styles from "./LogoArea.module.scss";

const LogoArea = () => {
    return (
        <Block padding={20} className={styles.LogoArea}>
            <Logo />
        </Block>
    );
};

export default LogoArea;
