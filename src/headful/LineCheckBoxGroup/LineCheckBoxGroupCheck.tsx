/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {useCheckboxGroup} from "headless/CheckboxGroup/CheckboxGroup";
import {ReactComponent as CheckIcon} from "assets/image/check.svg";
import React from "react";

type LineCheckBoxGroupCheckProps = {
    value: string;
};

const LineCheckBoxGroupCheck = ({value}: LineCheckBoxGroupCheckProps) => {
    const theme = useTheme();
    const {isChecked} = useCheckboxGroup();

    const lineCheckBoxGroupItemStyle = css`
        width: 21px;
        height: 20px;
        border-radius: ${theme.borderRadius.xs};
        border: 1px solid ${isChecked(value) ? "none" : theme.color.gray.light};
        background-color: ${isChecked(value)
            ? theme.color.primary
            : theme.color.background.box};
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    `;

    return (
        <div css={lineCheckBoxGroupItemStyle}>
            {isChecked(value) && <CheckIcon width={12.5} />}
        </div>
    );
};

export default LineCheckBoxGroupCheck;
