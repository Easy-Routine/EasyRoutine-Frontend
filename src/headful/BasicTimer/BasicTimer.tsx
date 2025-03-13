import moment from "moment";
import "moment-duration-format";
import styles from "./BasicTimer.module.scss";
import classNames from "classnames";

type BasicTimerProps = {
    value: number;
};

const BasicTimer = ({value}: BasicTimerProps) => {
    const formatted = moment.duration(value, "seconds").format("mm:ss", {
        trim: false,
    });

    // seconds가 1초 이상 9초 이하일 경우 경고 스타일 클래스 적용

    const combinedClassName = classNames(styles.Text, {
        [styles.Warning]: value <= 9 && value >= 1,
    });

    return (
        <div className={styles.BasicTimer}>
            <div className={combinedClassName}>{formatted}</div>
        </div>
    );
};

export default BasicTimer;
