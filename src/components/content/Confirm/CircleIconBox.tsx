import React from "react";
import CircleBox from "../../box/CircleBox/CircleBox";

type CircleIconBoxProps = {
    children: React.ReactNode;
};

const CircleIconBox = ({ children }: CircleIconBoxProps) => {
    return (
        <CircleBox width={64} height={64}>
            {children}
        </CircleBox>
    );
};

export default CircleIconBox;
