import React from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
    children: React.ReactNode;
};

const Portal = ({ children }: PortalProps) => {
    const portalRoot = document.getElementById('root');
    const portalElement = document.createElement('div');

    React.useEffect(() => {
        portalRoot?.appendChild(portalElement);

        return () => {
            portalRoot?.removeChild(portalElement);
        };
    }, [portalElement, portalRoot]);

    return portalElement ? ReactDOM.createPortal(children, portalElement) : null;
};

export default Portal;
