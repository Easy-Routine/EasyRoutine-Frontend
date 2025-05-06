import React from "react";
import {WorkoutConfig} from "types/model";
import {useRoutineConfigUpdateParams} from "../RoutineConfigUpdateParamsProvider/RoutineConfigUpdateParamsProvider";

type WorkoutConfigListProps = {
    component: (value: WorkoutConfig, key: number) => React.ReactNode;
};

const WorkoutConfigList = ({component}: WorkoutConfigListProps) => {
    const {routineConfig} = useRoutineConfigUpdateParams();

    return <>{routineConfig.map(component)}</>;
};

export default WorkoutConfigList;
