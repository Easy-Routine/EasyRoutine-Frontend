import React from "react";
import classNames from "classnames";
import styles from "./Block.module.scss";

export type Spacing = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

export type BlockProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    padding?: Spacing | number;
    margin?: Spacing | number;
    width?: number | string;
    height?: number | string;
};

// CSS custom properties를 허용하는 확장 타입 정의 (TS 4.1 이상 필요)
interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Block = ({
    children,
    padding,
    margin,
    width,
    height,
    style,
    className,
    ...props
}: BlockProps) => {
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

    // 숫자 또는 문자열 형태의 dimension을 문자열로 변환하는 함수
    const dimensionToString = (dim?: number | string): string => {
        if (typeof dim === "number") {
            return `${dim}px`;
        }
        return dim || "auto";
    };

    // CSS 변수로 동적 값 전달 (확장된 타입 사용)
    const cssVariables: CSSPropertiesWithVars = {
        "--block-padding": spacingToString(padding),
        "--block-margin": spacingToString(margin),
        "--block-width": dimensionToString(width),
        "--block-height": dimensionToString(height),
    };

    // width와 height를 inline style로 직접 지정하여 적용되도록 함
    const inlineStyles = {
        width: dimensionToString(width),
        height: dimensionToString(height),
        ...cssVariables,
        ...style,
    };

    return (
        <div
            {...props}
            className={classNames(styles.Block, className)}
            style={inlineStyles}
        >
            {children}
        </div>
    );
};

export default Block;
