import React from "react";
import classNames from "classnames";
import styles from "./Flex.module.scss";

type Spacing = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
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
    width?: number | string;
    height?: number | string;
};

const Flex = ({
    children,
    padding,
    margin,
    flexDirection = "row",
    alignItems = "stretch",
    justifyContent = "flex-start",
    gap = 0,
    flexWrap = "nowrap",
    width,
    height,
    style,
    className,
    ...props
}: FlexProps) => {
    // 숫자 또는 객체 형태의 spacing을 문자열로 변환하는 함수
    const spacingToString = (spacing?: Spacing | number): string => {
        if (typeof spacing === "number") {
            return `${spacing}px`;
        }
        if (spacing) {
            return `${spacing.top ?? 0}px ${spacing.right ?? 0}px ${spacing.bottom ?? 0}px ${spacing.left ?? 0}px`;
        }
        return "0";
    };

    // width와 height가 숫자면 px 단위를 붙이고, 문자열이면 그대로 사용
    const dimensionToString = (dim?: number | string): string => {
        if (typeof dim === "number") {
            return `${dim}px`;
        }
        return dim || "auto";
    };

    // CSS 변수로 동적 값 전달
    const cssVariables: React.CSSProperties = {
        "--flex-padding": spacingToString(padding),
        "--flex-margin": spacingToString(margin),
        "--flex-direction": flexDirection,
        "--flex-align-items": alignItems,
        "--flex-justify-content": justifyContent,
        "--flex-wrap": flexWrap,
        "--flex-gap": `${gap}px`,
        "--flex-width": dimensionToString(width),
        "--flex-height": dimensionToString(height),
    } as React.CSSProperties;

    return (
        <div
            {...props}
            className={classNames(styles.flex, className)}
            style={{...cssVariables, ...style}}
        >
            {children}
        </div>
    );
};

export default Flex;
