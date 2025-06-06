import React, {useRef, useState} from "react";
import styles from "./ImageInput.module.scss";
import ImageUpload from "assets/image/image-upload.svg";

// 초기 값으로 사용 할 수 있다.
// 그 후 부터는 바뀔 때마다 파라미터 상태를 바꿔야한다.
// 근데 그럴려면 useEffect를 써야 한다. 그러면 그냥 프롭스로 받는게 맞지

type ImageInputProps = {
    value: string;
    onInputChange: (value: File) => void;
};

const ImageInput = ({value, onInputChange}: ImageInputProps) => {
    // const [imageUrl, setImageUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onInputChange(file);
        }
    };

    return (
        <div
            className={styles.ImageInput}
            onClick={handleClick}
            style={{
                backgroundImage: value ? `url(${value})` : "none",
            }}
        >
            {!value && (
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
