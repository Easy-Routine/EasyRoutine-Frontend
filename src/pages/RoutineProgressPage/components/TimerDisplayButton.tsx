import {useModal} from "headless/Modal/Modal";
import React from "react";
import {useRoutineProgress} from "./RoutineProgressProvider";
import formatTime from "utils/formatTime";
import BasicTimer from "headful/BasicTimer/BasicTimer";

const TimerDisplayButton = () => {
    const {remainingTime} = useRoutineProgress();
    const {openModal} = useModal();

    const handleTimerDisplayButtonClick = () => {
        if (remainingTime <= 0) return;
        openModal();
    };
    return (
        <BasicTimer
            value={remainingTime}
            onTimerClick={handleTimerDisplayButtonClick}
        />
    );
};

export default TimerDisplayButton;
