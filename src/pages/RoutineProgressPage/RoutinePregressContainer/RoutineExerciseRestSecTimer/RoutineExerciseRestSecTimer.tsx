import BasicTimer from "headful/BasicTimer/BasicTimer";
import React from "react";

type RoutineExerciseRestSecTimerProps = {
    remainingTime: number;
};

const RoutineExerciseRestSecTimer = ({
    remainingTime,
}: RoutineExerciseRestSecTimerProps) => {
    return <BasicTimer value={remainingTime} />;
};

export default RoutineExerciseRestSecTimer;
