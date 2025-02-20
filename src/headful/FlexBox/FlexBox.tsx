import React from "react";

type Spacing = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

export type FlexBoxProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    padding?: Spacing | number;
    margin?: Spacing | number;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    alignItems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    gap?: number;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
};

const FlexBox = ({
    children,
    padding,
    margin,
    flexDirection = "row",
    alignItems = "stretch",
    justifyContent = "flex-start",
    gap = 0,
    flexWrap = "nowrap",
    ...props
}: FlexBoxProps) => {
    // padding과 margin을 숫자 또는 객체로 처리하는 함수
    const spacingToString = (spacing?: Spacing | number) => {
        if (typeof spacing === "number") {
            return `${spacing}px`;
        }
        if (spacing) {
            return `${spacing.top ?? 0}px ${spacing.right ?? 0}px ${spacing.bottom ?? 0}px ${spacing.left ?? 0}px`;
        }
        return "0";
    };

    // 동적 스타일은 인라인 스타일 객체로 생성합니다.
    const dynamicStyle: React.CSSProperties = {
        display: "flex",
        flexDirection,
        alignItems,
        justifyContent,
        flexWrap,
        gap: `${gap}px`,
        padding: spacingToString(padding),
        margin: spacingToString(margin),
    };

    return (
        <div {...props} style={dynamicStyle}>
            {children}
        </div>
    );
};

export default FlexBox;
