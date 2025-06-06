import React from "react";
import styles from "./ConfirmSet.module.scss";
import Icon from "./components/Icon";
import Title from "./components/Title";
import Description from "./components/Description";
import Cancel from "./components/Cancel";
import Confirm from "./components/Confirm";

type ConfirmSetProps = {
    color?: string;
    children: [
        React.ReactNode,
        React.ReactNode,
        React.ReactNode,
        React.ReactNode,
        React.ReactNode,
    ];
};

const ConfirmSet = ({color = "#82b1ff", children}: ConfirmSetProps) => {
    const [icon, title, description, cancel, confirm] = children;

    return (
        <div
            className={styles.ConfirmSet}
            style={{"--color": color} as React.CSSProperties}
        >
            <div className={styles.Main}>
                <div className={styles.IconTitle}>
                    {icon}
                    {title}
                </div>

                {description}
            </div>

            <div className={styles.Buttons}>
                {cancel}
                {confirm}
            </div>
        </div>
    );
};

export default ConfirmSet;

ConfirmSet.Icon = Icon;
ConfirmSet.Title = Title;
ConfirmSet.Description = Description;
ConfirmSet.Cancel = Cancel;
ConfirmSet.Confirm = Confirm;
