import React from "react";
import styles from "./Image.module.scss";

type ImageProps = {
    width: number;
    height: number;
    src: string;
};

const Image = ({width, height, src}: ImageProps) => {
    return (
        <img
            className={styles.image}
            style={{width: `${width}px`, height: `${height}px`}}
            src={src}
            alt=""
        />
    );
};

export default Image;
