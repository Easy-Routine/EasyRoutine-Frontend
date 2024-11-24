import { useState } from "react";

const useTab = (defaultValue: string, disabled?: boolean) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const handleTabClick = (value: string) => {
        if (disabled) {
            return;
        }
        setSelectedValue(value);
    };

    return { selectedValue, handleTabClick, setSelectedValue };
};

export default useTab;
