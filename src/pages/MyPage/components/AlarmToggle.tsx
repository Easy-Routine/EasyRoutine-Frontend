import BasicToggle from "headful/BasicToggle/BasicToggle";
import React from "react";
import {useAlram} from "./AlarmProvider";

const AlarmToggle = () => {
    const {isActive, setIsActive} = useAlram();

    const handleAlarmClick = () => {
        setIsActive(prev => !prev);
    };

    return (
        <BasicToggle defaultValue={isActive} onToggleClick={handleAlarmClick} />
    );
};

export default AlarmToggle;
