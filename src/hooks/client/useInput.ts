import { ChangeEvent, useState } from "react";

const useInput = (defaultValue?: string) => {
    const [value, setValue] = useState(defaultValue ?? "");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const handleInputClear = () => {
        setValue("");
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setValue(imageUrl);
        }
    };

    return {
        value,
        setValue,
        handleInputChange,
        handleInputClear,
        handleFileChange,
    };
};

export default useInput;
