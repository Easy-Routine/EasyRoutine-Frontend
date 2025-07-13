import BasicToggle from "headful/BasicToggle/BasicToggle";
import React from "react";
import {Before, useAlram} from "./AlarmProvider";
import useNativeMessage from "hooks/client/useNativeMessage";

const AlarmToggle = () => {
    const {isActive, setIsActive, setRoutineStartHour, setRoutineStartMinute} =
        useAlram();
    const {sendNativeMessage} = useNativeMessage();

    const handleAlarmClick = () => {
        if (isActive) {
            setIsActive(false);
            localStorage.setItem("isActive", "false");
            sendNativeMessage({
                type: "ROUTINE_RESERVATION",
                data: {
                    isActive: false,
                },
            });
        } else {
            setIsActive(true);
            localStorage.setItem("isActive", "true");
            setRoutineStartHour("00"); // 기본값 설정, 필요에 따라 수정
            localStorage.setItem("hour", "00");
            setRoutineStartMinute("00"); // 기본값 설정, 필요에 따라 수정
            localStorage.setItem("minute", "00");
            sendNativeMessage({
                type: "ROUTINE_RESERVATION",
                data: {
                    isActive: true,
                    hour: "00", // 기본값 설정, 필요에 따라 수정
                    minute: "00", // 기본값 설정, 필요에 따라 수정
                    before: Before.HALF_HOUR,
                },
            });
        }
    };

    return (
        <BasicToggle defaultValue={isActive} onToggleClick={handleAlarmClick} />
    );
};

export default AlarmToggle;
