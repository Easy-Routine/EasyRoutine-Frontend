import Dropdown from "headless/Dropdown/Dropdown";
import SelectGroup, {useSelectGroup} from "headless/SelectGroup/SelectGroup";
import styles from "./Trigger.module.scss";
import {MdKeyboardArrowDown} from "react-icons/md";
import classNames from "classnames";

type TriggerProps = {
    // icon: React.ReactNode;
    // label: React.ReactNode;
    disabled?: boolean;
    render?: (value: string) => React.ReactNode;
};

const Trigger = ({render, disabled}: TriggerProps) => {
    const {selectGroupValue} = useSelectGroup();
    // const isSelected = selectGroupValue !== "";

    const className = classNames(styles.Trigger, {
        [styles.Disabled]: disabled,
    });

    return (
        <Dropdown.Trigger className={className} disabled={disabled}>
            <SelectGroup.Display className={styles.Display} render={render} />
            <MdKeyboardArrowDown className={styles.Icon} />
        </Dropdown.Trigger>
    );
};

export default Trigger;
