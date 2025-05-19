import {useRoutineProgress} from "pages/RoutineProgressPage/RoutineConfigGetContainer/RoutinePregressContainer/RoutineProgressProvider";
import React from "react";
import {WorkoutConfig} from "types/model";

type WorkoutConfigListProps = {
    component: (value: WorkoutConfig, key: number) => React.ReactNode;
};

const WorkoutConfigList = ({component}: WorkoutConfigListProps) => {
    const {routineProgress} = useRoutineProgress();

    return <>{routineProgress.workoutConfigs.map(component)}</>;
};

export default WorkoutConfigList;
