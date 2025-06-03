import React from "react";
import styles from "./ImageTextItem.module.scss";
import ArrowRight from "assets/image/arrow.svg";

type ImageTextItemProps = {
    image: string;
    text: string;
    onItemClick: () => void;
};

const ImageTextItem = ({image, text, onItemClick}: ImageTextItemProps) => {
    return (
        <div className={styles.ImageTextItem} onClick={onItemClick}>
            <div className={styles.ImageText}>
                <div className={styles.Image}>
                    <img src={image} alt="운동 이미지" />
                </div>
                <div className={styles.Text}>
                    <span>{text}</span>
                </div>
            </div>
            <div className={styles.Icon}>
                <img src={ArrowRight} alt="이동 버튼" />
            </div>
        </div>
    );
};

export default ImageTextItem;
