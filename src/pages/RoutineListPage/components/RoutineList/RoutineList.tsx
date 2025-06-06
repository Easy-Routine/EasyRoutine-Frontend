import useRoutineAllGetQuery from "hooks/server/useRoutineAllGetQuery";
import React from "react";
import {Routine} from "types/model";
import {RoutineAllGetRes} from "types/routine";

type RoutineListProps = {
    component: (
        value: RoutineAllGetRes[number],
        key: number,
    ) => React.ReactNode;
};

const RoutineList = ({component}: RoutineListProps) => {
    const {data} = useRoutineAllGetQuery();

    const routines = data.routines!;

    return <>{routines.map(component)}</>;
};

export default RoutineList;
