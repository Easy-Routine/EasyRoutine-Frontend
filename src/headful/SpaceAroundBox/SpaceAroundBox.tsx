/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";

type SpaceAroundBoxProps = {
    children: React.ReactNode;
};

const SpaceAroundBox = ({children}: SpaceAroundBoxProps) => {
    const spaceAroundBox = css`
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
    `;

    return <div css={spaceAroundBox}>{children}</div>;
};

export default SpaceAroundBox;
