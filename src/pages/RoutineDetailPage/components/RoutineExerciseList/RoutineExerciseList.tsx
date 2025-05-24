import React from "react";
import {RoutineExercise} from "types/model";
import {useRoutineUpdateParams} from "../RoutineUpdateParamsProvider/RoutineUpdateParamsProvider";

type RoutineExerciseListProps = {
    component: (value: RoutineExercise, key: number) => React.ReactNode;
};

const RoutineExerciseList = ({component}: RoutineExerciseListProps) => {
    const {routine} = useRoutineUpdateParams();

    return <>{routine.routineExercises.map(component)}</>;
};

export default RoutineExerciseList;
