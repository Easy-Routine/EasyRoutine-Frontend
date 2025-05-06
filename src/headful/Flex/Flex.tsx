import React from "react";
import classNames from "classnames";
import styles from "./Flex.module.scss";

type PaddingSize =
    | number
    | {
          x?: number;
          y?: number;
          l?: number;
          r?: number;
          t?: number;
          b?: number;
      };

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    align?: "stretch" | "center" | "start" | "end" | "baseline";
    justify?:
        | "start"
        | "end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    gap?: number;
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    width?: number | string;
    height?: number | string;
    padding?: PaddingSize;
};

const Flex = ({
    children,
    direction = "row",
    align = "stretch",
    justify = "start",
    gap = 0,
    wrap = "nowrap",
    width,
    height,
    padding,
    style,
    className,
    ...props
}: FlexProps) => {
    const dimensionToString = (dim?: number | string): string => {
        if (typeof dim === "number") {
            return `${dim}px`;
        }
        return dim || "auto";
    };

    const spacingToString = (padding: PaddingSize | number = 0): string => {
        // now padding is always number/string/object

        if (typeof padding === "number" || typeof padding === "string") {
            return dimensionToString(padding as number);
        }

        // object: start with x/y defaults
        const px = padding.x != null ? dimensionToString(padding.x) : "0px";
        const py = padding.y != null ? dimensionToString(padding.y) : "0px";

        let top = py;
        let bottom = py;
        let left = px;
        let right = px;

        if (padding.t != null) top = dimensionToString(padding.t);
        if (padding.b != null) bottom = dimensionToString(padding.b);
        if (padding.l != null) left = dimensionToString(padding.l);
        if (padding.r != null) right = dimensionToString(padding.r);

        return `${top} ${right} ${bottom} ${left}`;
    };

    const cssVariables: React.CSSProperties = {
        "--flex-direction": direction,
        "--align-items": align,
        "--justify-content": justify,
        "--wrap": wrap,
        "--gap": `${gap}px`,
        "--width": dimensionToString(width),
        "--height": dimensionToString(height),
        "--padding": spacingToString(padding),
    } as React.CSSProperties;

    return (
        <div
            {...props}
            className={classNames(styles.Flex, className)}
            style={{...cssVariables, ...style}}
        >
            {children}
        </div>
    );
};

export default Flex;
