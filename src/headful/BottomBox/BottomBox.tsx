import React, {useEffect, useRef} from "react";
import styles from "./BottomBox.module.scss";

type BottomBoxProps = {
    children?: React.ReactNode;
};

const BottomBox = ({children}: BottomBoxProps) => {
    const bottomBoxRef = useRef<HTMLDivElement>(null);

    const updateBottomBarPosition = () => {
        const wrapElement = document.getElementById("wrap");
        if (wrapElement && bottomBoxRef.current) {
            const wrapRect = wrapElement.getBoundingClientRect();
            bottomBoxRef.current.style.width = `${wrapElement.clientWidth}px`;
            bottomBoxRef.current.style.left = `${wrapRect.left}px`;
            bottomBoxRef.current.style.bottom = "0px";
        }
    };

    useEffect(() => {
        updateBottomBarPosition(); // 초기 위치 설정
        window.addEventListener("resize", updateBottomBarPosition);
        return () => {
            window.removeEventListener("resize", updateBottomBarPosition);
        };
    }, []);

    return (
        <div id="bottom-box" ref={bottomBoxRef} className={styles.bottomBox}>
            {children}
        </div>
    );
};

export default BottomBox;
