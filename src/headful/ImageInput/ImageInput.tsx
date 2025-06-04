import React, {useRef, useState} from "react";
import styles from "./ImageInput.module.scss";
import ImageUpload from "assets/image/image-upload.svg";

const ImageInput: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImageUrl(previewUrl);
        }
    };

    return (
        <div
            className={styles.ImageInput}
            onClick={handleClick}
            style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
            }}
        >
            {!imageUrl && (
                <div className={styles.ImageText}>
                    <img src={ImageUpload} alt="이미지 업로드" />
                    <span>운동 이미지를 첨부해주세요</span>
                </div>
            )}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleChange}
            />
        </div>
    );
};

export default ImageInput;
