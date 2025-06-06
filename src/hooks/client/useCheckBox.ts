import { useEffect, useState } from "react";

const useCheckBox = (defaultValues?: string[], disabled?: boolean) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(
        defaultValues ?? []
    );

    const handleCheckBoxClick = (value: string) => {
        if (disabled) {
            return;
        }
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

    const resetSelectedValues = () => {
        setSelectedValues([]);
    };

    useEffect(() => {
        console.log("값변경", selectedValues);
    }, [selectedValues]);

    return {
        selectedValues,
        handleCheckBoxClick,
        setSelectedValues,
        resetSelectedValues,
    };
};

export default useCheckBox;
