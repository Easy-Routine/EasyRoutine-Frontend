import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";

type BottomBoxPortalProps = {
    children: React.ReactNode;
};

const BottomBoxPortal = ({children}: BottomBoxPortalProps) => {
    const portalRoot = document.getElementById("bottom-box");
    const portalElement = useRef(document.createElement("div")); // useRef로 portalElement 관리

    useEffect(() => {
        if (portalRoot) {
            portalRoot.appendChild(portalElement.current); // 현재 portalElement를 추가
        }

        return () => {
            if (portalRoot) {
                portalRoot.removeChild(portalElement.current); // 클린업 시 현재 portalElement 제거
            }
        };
    }, [portalRoot]);

    return portalRoot
        ? ReactDOM.createPortal(children, portalElement.current)
        : null;
};

export default BottomBoxPortal;
