import BasicTimer from "headful/BasicTimer/BasicTimer";
import React from "react";

type WorkoutRestSecTimerProps = {
    remainingTime: number;
};

const WorkoutRestSecTimer = ({remainingTime}: WorkoutRestSecTimerProps) => {
    return <BasicTimer value={remainingTime} />;
};

export default WorkoutRestSecTimer;
