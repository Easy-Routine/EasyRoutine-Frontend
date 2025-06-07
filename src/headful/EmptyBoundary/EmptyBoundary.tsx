type EmptyBoundaryProps = {
    fallback: React.ReactNode;
    data: any[];
    children: React.ReactNode;
};

const EmptyBoundary = ({fallback, data, children}: EmptyBoundaryProps) => {
    if (data.length === 0) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
};

export default EmptyBoundary;
