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
    return { value, setValue, handleInputChange, handleInputClear };
};

export default useInput;
