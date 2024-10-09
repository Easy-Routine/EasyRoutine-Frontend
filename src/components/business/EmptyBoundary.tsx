import React from "react";

type EmptyBoundaryProps = {
    data: any;
    fallback: React.ReactNode;
    children: React.ReactNode;
};

const EmptyBoundary = ({ data, fallback, children }: EmptyBoundaryProps) => {
    if (data && data.length === 0) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
};

export default EmptyBoundary;
