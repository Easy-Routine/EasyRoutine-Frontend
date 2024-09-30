import { useEffect, useState } from "react";

const useCheckBox = () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckBoxClick = (value: string) => {
        const newState = structuredClone(selectedValues);
        if (selectedValues.includes(value)) {
            setSelectedValues(
                newState.filter((item: string) => item !== value)
            );
        } else {
            newState.push(value);
            setSelectedValues(newState);
        }
    };

    useEffect(() => {
        console.log("값변경", selectedValues);
    }, [selectedValues]);

    return { selectedValues, handleCheckBoxClick, setSelectedValues };
};

export default useCheckBox;
