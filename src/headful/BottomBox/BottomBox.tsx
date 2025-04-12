import React, {useEffect, useRef} from "react";
import styles from "./BottomBox.module.scss";

type BottomBoxProps = {
    children?: React.ReactNode;
};

const BottomBox = ({children}: BottomBoxProps) => {

    return (
        <div id="bottom-box" className={styles.bottomBox}>
            {children}
        </div>
    );
};

export default BottomBox;
