import React from "react";
import {WorkoutConfig} from "types/model";
import {useRoutineConfigCreate} from "../RoutineConfigCreateProvider/RoutineConfigCreateProvider";

type WorkoutConfigListProps = {
    component: (value: WorkoutConfig, key: number) => React.ReactNode;
};

const WorkoutConfigList = ({component}: WorkoutConfigListProps) => {
    const {routineConfig} = useRoutineConfigCreate();

    return <>{routineConfig.workoutConfigs.map(component)}</>;
};

export default WorkoutConfigList;
