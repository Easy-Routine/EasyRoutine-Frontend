import {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {ReactComponent as PlaceholderIcon} from "assets/image/img-placeholder.svg";
import {ReactComponent as CameraCircleIcon} from "assets/image/camera-circle.svg";
import Lottie from "lottie-react";
import loadingAnimation from "assets/image/loading.json";

const Container = styled.label`
    width: 150px;
    height: 150px;
    padding: 10px;
    border-radius: ${({theme}) => theme.borderRadius.xl};
    border: 1px solid ${({theme}) => theme.color.gray.normal};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
`;
const Input = styled.input`
    display: none;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const CameraCircle = styled(CameraCircleIcon)`
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: -5px;
    right: -5px;
`;

const ImageLoading = styled(Lottie)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`;

type ImageInputProps = {
    value: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
};

const ImageInput = ({value, onInputChange, disabled}: ImageInputProps) => {
    const [image, setImage] = useState(value);
    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        setImage(value);
    }, [value]);

    const handleImageLoad = () => {
        setIsImageLoading(false);
    };

    return (
        <Container>
            <Input
                type="file"
                accept="image/*"
                onChange={onInputChange}
                disabled={disabled}
            />
            {image ? (
                <Image src={image} onLoad={handleImageLoad} />
            ) : (
                <PlaceholderIcon />
            )}
            {disabled || <CameraCircle />}

            {isImageLoading && (
                <ImageLoading
                    animationData={loadingAnimation}
                    loop={true}
                    style={{width: 35, height: 35}}
                />
            )}
        </Container>
    );
};

export default ImageInput;
