import React from "react";
import styles from "./Image.module.scss";

type ImageProps = {
    width: number;
    height: number;
    borderRadius?: string;
    src: string;
};

const Image = ({width, height, borderRadius = "0px", src}: ImageProps) => {
    return (
        <img
            className={styles.image}
            style={{width: `${width}px`, height: `${height}px`, borderRadius}}
            src={src}
            alt=""
        />
    );
};

export default Image;
