import { ChangeEvent, useState } from "react";

const useInput = () => {
    const [value, setValue] = useState("");

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
