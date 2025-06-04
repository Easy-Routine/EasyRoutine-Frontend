import {InputHTMLAttributes} from "react";
import styles from "./BasicInput.module.scss";

type BasicInputProps = InputHTMLAttributes<HTMLInputElement> & {};

const BasicInput = ({...props}: BasicInputProps) => {
    return (
        <input
            {...props}
            className={styles.BasicInput}
            placeholder="운동 이름을 입력해주세요."
        />
    );
};

export default BasicInput;
