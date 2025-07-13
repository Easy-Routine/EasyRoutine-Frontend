import SelectB from "headful/SelectB/SelectB";
import React, {useState} from "react";
import {useAlram} from "./AlarmProvider";
import useNativeMessage from "hooks/client/useNativeMessage";

const RoutineStartHourSelect = () => {
    const {
        routineStartHour,
        routineStartMinute,
        beforeRoutineStartTime,
        setRoutineStartHour,
    } = useAlram();
    const {sendNativeMessage} = useNativeMessage();

    // 00 ~ 23시
    const hours = Array.from({length: 24}, (_, i) =>
        String(i).padStart(2, "0"),
    );

    const handleItemClick = (hour: string) => {
        setRoutineStartHour(hour);
        localStorage.setItem("hour", hour);
        sendNativeMessage({
            type: "ROUTINE_RESERVATION",
            data: {
                isActive: true,
                hour: hour,
                minute: routineStartMinute,
                before: beforeRoutineStartTime,
            },
        });
    };

    return (
        <SelectB defaultValue={routineStartHour} full>
            <SelectB.Trigger
                render={value => (
                    <div>
                        <span>{value}</span>시
                    </div>
                )}
            />
            <SelectB.Content height={125}>
                {hours.map(hour => (
                    <SelectB.Item
                        key={hour}
                        value={hour}
                        onSelectGroupItemClick={() => handleItemClick(hour)}
                    >
                        {hour}시
                    </SelectB.Item>
                ))}
            </SelectB.Content>
        </SelectB>
    );
};

export default RoutineStartHourSelect;
