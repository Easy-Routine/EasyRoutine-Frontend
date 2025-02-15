/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {motion} from "framer-motion";
import {css, useTheme} from "@emotion/react";

type SwipeableAccordionMotionProps = {
    children: (isDragging: boolean) => React.ReactNode;
};

const SwipeableAccordionMotion = ({
    children,
}: SwipeableAccordionMotionProps) => {
    const theme = useTheme();
    const [x, setX] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = (_: any, info: {offset: {x: number}}) => {
        if (info.offset.x > 0) {
            // 오른쪽으로 드래그
            setX(0); // 원래 위치로 돌아가기
            setOpacity(0);
        } else {
            // 왼쪽으로 드래그
            setX(-65); // 왼쪽으로 이동하여 삭제 버튼 보이기
            setOpacity(1);
        }
        setIsDragging(false);
    };

    const swipeableAccordionMotionStyle = css`
        width: 100%;
        height: auto;
        box-sizing: border-box;
        cursor: grab;
        background-color: ${theme.color.background.box};
        border-radius: ${theme.borderRadius.md};
        box-shadow: ${theme.boxShadow};
    `;

    return (
        <motion.div
            css={swipeableAccordionMotionStyle}
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
