import {ReactComponent as CheckIcon} from "assets/image/check.svg";
import styles from "./LineSelectGroupCheck.module.scss";
import {useSelectGroup} from "headless/SelectGroup/SelectGroup";
import classNames from "classnames";
import {FaCheck} from "react-icons/fa6";

type LineSelectGroupCheckProps = {
    value: string;
};

const LineSelectGroupCheck = ({value}: LineSelectGroupCheckProps) => {
    const {selectGroupValue} = useSelectGroup();
    const selected = value === selectGroupValue;

    const className = classNames(styles.LineSelectGroupCheck, {
        [styles.LineSelectGroupSelected]: selected,
    });

    return <div className={className}>{selected && <FaCheck />}</div>;
};

export default LineSelectGroupCheck;
