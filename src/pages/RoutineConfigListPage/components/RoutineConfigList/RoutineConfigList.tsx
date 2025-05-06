import useRoutineConfigAllGetQuery from "hooks/server/useRoutineConfigAllGetQuery";
import React from "react";
import {RoutineConfig} from "types/model";

type RoutineConfigListProps = {
    component: (value: RoutineConfig, key: number) => React.ReactNode;
};

const RoutineConfigList = ({component}: RoutineConfigListProps) => {
    const {data} = useRoutineConfigAllGetQuery();

    const routineConfigs = data.routineConfigs!;

    return <>{routineConfigs.map(component)}</>;
};

export default RoutineConfigList;
