import { useState } from "react";

const useTab = (defaultValue: string) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const handleTabClick = (value: string) => {
        setSelectedValue(value);
    };

    return { selectedValue, handleTabClick };
};

export default useTab;
