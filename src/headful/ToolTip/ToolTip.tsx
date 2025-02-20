import React, {useState} from "react";
import {ReactComponent as QuestionIcon} from "assets/image/tooltip-question.svg";
import styles from "./ToolTip.module.scss";

type ToolTipProps = {
    text: string;
    toolTipPosition: "left" | "right";
};

const ToolTip = ({text, toolTipPosition}: ToolTipProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleToolTipClick = () => {
        setIsActive(prev => !prev);
    };

    const handleToolTipBoxClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // 클릭 이벤트 전파 방지
    };

    // 동적으로 변화하는 opacity는 인라인 스타일로 처리합니다.
    const tooltipBoxStyle: React.CSSProperties = {
        opacity: isActive ? 1 : 0,
    };

    // 위치에 따른 modifier 클래스 적용
    const tooltipBoxClassName = `${styles.tooltipBox} ${
        toolTipPosition === "left"
            ? styles["tooltipBox--left"]
            : styles["tooltipBox--right"]
    }`;

    return (
        <div className={styles.tooltip} onClick={handleToolTipClick}>
            <QuestionIcon />
            <div
                className={tooltipBoxClassName}
                style={tooltipBoxStyle}
                onClick={handleToolTipBoxClick}
            >
                {text}
            </div>
        </div>
    );
};

export default ToolTip;
