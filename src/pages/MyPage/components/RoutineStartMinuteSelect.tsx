import SelectB from "headful/SelectB/SelectB";
import React, {useState} from "react";
import {useAlram} from "./AlarmProvider";
import useNativeMessage from "hooks/client/useNativeMessage";

const RoutineStartMinuteSelect = () => {
    const {
        routineStartMinute,
        routineStartHour,
        beforeRoutineStartTime,
        setRoutineStartMinute,
    } = useAlram();
    const {sendNativeMessage} = useNativeMessage();

    // 00 ~ 59분
    const minutes = Array.from({length: 60}, (_, i) =>
        String(i).padStart(2, "0"),
    );

    const handleItemClick = (minute: string) => {
        localStorage.setItem("minute", minute);
        setRoutineStartMinute(minute);
        sendNativeMessage({
            type: "ROUTINE_RESERVATION",
            data: {
                isActive: true,
                hour: routineStartHour,
                minute,
                before: beforeRoutineStartTime,
            },
        });
    };

    return (
        <SelectB defaultValue={routineStartMinute} full>
            <SelectB.Trigger
                render={value => (
                    <div>
                        <span>{value}</span>분
                    </div>
                )}
            />
            <SelectB.Content height={125}>
                {minutes.map(minute => (
                    <SelectB.Item
                        key={minute}
                        value={minute}
                        onSelectGroupItemClick={() => handleItemClick(minute)}
                    >
                        {minute}분
                    </SelectB.Item>
                ))}
            </SelectB.Content>
        </SelectB>
    );
};

export default RoutineStartMinuteSelect;
