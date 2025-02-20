import React from "react";
import {ReactComponent as TrashIcon} from "assets/image/trash.svg";
import styles from "./SwipeableAccordionDeleteButton.module.scss";

type SwipeableAccordionDeleteButtonProps = {
    onSwipeableAccordionDeleteButtonClick?: () => void;
};

const SwipeableAccordionDeleteButton = ({
    onSwipeableAccordionDeleteButtonClick,
}: SwipeableAccordionDeleteButtonProps) => {
    return (
        <div
            className={styles.swipeableAccordionDeleteButton}
            onClick={onSwipeableAccordionDeleteButtonClick}
        >
            <TrashIcon />
        </div>
    );
};

export default SwipeableAccordionDeleteButton;
