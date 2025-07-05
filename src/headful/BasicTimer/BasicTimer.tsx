import moment from "moment";
import "moment-duration-format";
import styles from "./BasicTimer.module.scss";
import classNames from "classnames";
import formatTime from "utils/formatTime";

type BasicTimerProps = {
    value: number;
    onTimerClick?: () => void;
};

const BasicTimer = ({value, onTimerClick}: BasicTimerProps) => {
    // seconds가 1초 이상 9초 이하일 경우 경고 스타일 클래스 적용

    const combinedClassName = classNames(styles.Text, {
        [styles.Warning]: value <= 9 && value >= 1,
    });

    return (
        <div className={styles.BasicTimer} onClick={onTimerClick}>
            <div className={combinedClassName}>{formatTime(value)}</div>
        </div>
    );
};

export default BasicTimer;
