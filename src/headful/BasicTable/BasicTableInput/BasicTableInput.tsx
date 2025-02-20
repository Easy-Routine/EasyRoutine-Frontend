import React from "react";
import styles from "./BasicTableInput.module.scss";

type BasicTableInputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const BasicTableInput = ({...props}: BasicTableInputProps) => {
    return (
        <div className={styles.basicTableInputWrapper}>
            <input {...props} className={styles.basicTableInput} />
        </div>
    );
};

export default BasicTableInput;
