import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlaceholderIcon } from "assets/image/img-placeholder.svg";

const Container = styled.label`
    width: 150px;
    height: 150px;
    padding: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    border: 1px solid ${({ theme }) => theme.color.gray.normal};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Input = styled.input`
    display: none;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;

type ImageInputProps = {
    value: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ImageInput = ({ value, onInputChange }: ImageInputProps) => {
    const [image, setImage] = useState(value);

    useEffect(() => {
        setImage(value);
        console.log(value);
    }, [value]);

    return (
        <Container>
            <Input type="file" accept="image/*" onChange={onInputChange} />
            {image ? <Image src={image} /> : <PlaceholderIcon />}
        </Container>
    );
};

export default ImageInput;
