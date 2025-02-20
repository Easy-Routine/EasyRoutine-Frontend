import React, {useState} from "react";
import {motion} from "framer-motion";
import styles from "./SwipeableAccordionMotion.module.scss";

type SwipeableAccordionMotionProps = {
    children: (isDragging: boolean) => React.ReactNode;
};

const SwipeableAccordionMotion = ({
    children,
}: SwipeableAccordionMotionProps) => {
    const [x, setX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = (_: any, info: {offset: {x: number}}) => {
        if (info.offset.x > 0) {
            // 오른쪽으로 드래그: 원래 위치로 복귀
            setX(0);
        } else {
            // 왼쪽으로 드래그: 왼쪽으로 이동하여 삭제 버튼 보이기
            setX(-65);
        }
        setIsDragging(false);
    };

    return (
        <motion.div
            className={styles.swipeableAccordionMotion}
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{x}}
        >
            {children(isDragging)}
        </motion.div>
    );
};

export default SwipeableAccordionMotion;
