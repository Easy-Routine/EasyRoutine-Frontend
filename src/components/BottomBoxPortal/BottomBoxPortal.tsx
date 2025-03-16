import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";

type BottomBoxPortalProps = {
    children: React.ReactNode;
};

const BottomBoxPortal = ({children}: BottomBoxPortalProps) => {
    const portalRoot = document.getElementById("bottom-box");
    const portalElement = useRef(document.createElement("div"));

    useEffect(() => {
        if (portalRoot) {
            portalRoot.appendChild(portalElement.current);
        }
        return () => {
            portalElement.current.style.width = "100%";
            if (portalRoot) {
                portalRoot.removeChild(portalElement.current);
            }
        };
    }, [portalRoot]);

    return portalRoot
        ? ReactDOM.createPortal(
              <React.Fragment>{children}</React.Fragment>,
              portalElement.current,
          )
        : null;
};

export default BottomBoxPortal;
