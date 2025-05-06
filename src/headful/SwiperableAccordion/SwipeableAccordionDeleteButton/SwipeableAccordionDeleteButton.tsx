import React, {HTMLAttributes} from "react";
import {ReactComponent as TrashIcon} from "assets/image/trash.svg";
import styles from "./SwipeableAccordionDeleteButton.module.scss";

type SwipeableAccordionDeleteButtonProps = HTMLAttributes<HTMLDivElement> & {};

const SwipeableAccordionDeleteButton = ({
    ...props
}: SwipeableAccordionDeleteButtonProps) => {
    return (
        <div
            className={styles.swipeableAccordionDeleteButton}
            onClick={props.onClick}
        >
            <TrashIcon />
        </div>
    );
};

export default SwipeableAccordionDeleteButton;
