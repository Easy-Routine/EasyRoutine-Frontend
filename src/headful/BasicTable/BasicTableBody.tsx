import React from "react";

type BasicTableBodyProps = {
    children: React.ReactNode;
};

const BasicTableBody = ({children}: BasicTableBodyProps) => {
    return <tbody>{children}</tbody>;
};

export default BasicTableBody;
