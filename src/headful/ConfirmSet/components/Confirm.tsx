import React from "react";
import styles from "../ConfirmSet.module.scss";
import classNames from "classnames";

type ConfirmProps = {
    text: string;
    onButtonClick?: () => void;
    single?: boolean;
};

const Confirm = ({text, onButtonClick, single}: ConfirmProps) => {
    const className = classNames(styles.Confirm, {
        [styles.Single]: single,
    });

    return (
        <div className={className}>
            <button onClick={onButtonClick}>{text}</button>
        </div>
    );
};

export default Confirm;
