import React from "react";
import styles from "./UnderlineItem.module.scss";
import {IconType} from "react-icons";

type UnderlineItemProps = {
    Icon: IconType;
    label: string;
    children: React.ReactNode;
    extraChildren?: React.ReactNode;
};

const UnderlineItem = ({
    Icon,
    label,
    children,
    extraChildren,
}: UnderlineItemProps) => {
    return (
        <div className={styles.UnderlineItem}>
            <div className={styles.Main}>
                <div className={styles.IconLabel}>
                    <Icon className={styles.Icon} />
                    <span className={styles.Label}>{label}</span>
                </div>
                <div className={styles.Children}>{children}</div>
            </div>
            <div className={styles.Extra}>
                {extraChildren && (
                    <div className={styles.ExtraChildren}>{extraChildren}</div>
                )}
            </div>
        </div>
    );
};

export default UnderlineItem;
