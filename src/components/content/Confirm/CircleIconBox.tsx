import React from "react";
import IconBox from "../../box/IconBox/IconBox";

type CircleIconBoxProps = {
    children: React.ReactNode;
};

const CircleIconBox = ({ children }: CircleIconBoxProps) => {
    return (
        <IconBox width={64} height={64}>
            {children}
        </IconBox>
    );
};

export default CircleIconBox;
