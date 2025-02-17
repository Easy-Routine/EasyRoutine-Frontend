/** @jsxImportSource @emotion/react */
import React from "react";
import {BackgroundColor, Color} from "types/enum";
import {ReactComponent as FireIcon} from "assets/image/fire.svg";
import {css, useTheme} from "@emotion/react";

const ColorMapper = {
    [Color.VIOLET]: [BackgroundColor.VIOLET],
    [Color.ORANGE]: [BackgroundColor.ORANGE],
    [Color.GREEN]: [BackgroundColor.GREEN],
    [Color.BLUE]: [BackgroundColor.BLUE],
    [Color.PINK]: [BackgroundColor.PINK],
};

type FireColorBoxProps = {
    color: Color;
};

const FireColorBox = ({color}: FireColorBoxProps) => {
    const theme = useTheme();
    const fireColorBoxStyle = css`
        background-color: ${ColorMapper[color]};
        width: 60px;
        height: 60px;
        border-radius: ${theme.borderRadius.md};
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return (
        <div css={fireColorBoxStyle}>
            <FireIcon style={{color}} />
        </div>
    );
};

export default FireColorBox;
