import { useEffect, useState } from "react";

type DefferedComponentProps = {
    children: React.ReactNode;
    duration?: number;
};

const DefferredComponent = ({
    children,
    duration = 200,
}: DefferedComponentProps) => {
    const [isDeferred, setIsDeferred] = useState(false);

    useEffect(() => {
        // 200ms 지난 후 children Render
        const timeoutId = setTimeout(() => {
            setIsDeferred(true);
        }, duration);
        return () => clearTimeout(timeoutId);
    }, []);

    if (!isDeferred) {
        return null;
    }

    return <>{children}</>;
};

export default DefferredComponent;
