import React, {HTMLAttributes} from "react";
import styles from "./OutlinedButton.module.scss";

type OutlinedButtonProps = HTMLAttributes<HTMLButtonElement> & {};

const OutlinedButton = (props: OutlinedButtonProps) => {
    return <button {...props} className={styles.OutlinedButton} />;
};

export default OutlinedButton;
