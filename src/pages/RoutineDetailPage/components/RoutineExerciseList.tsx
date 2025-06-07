import React from "react";
import {RoutineExercise} from "types/model";
import {useRoutineUpdate} from "./RoutineUpdateProvider";

type RoutineExerciseListProps = {
    component: (value: RoutineExercise, key: number) => React.ReactNode;
};

const RoutineExerciseList = ({component}: RoutineExerciseListProps) => {
    const {routine} = useRoutineUpdate();

    return <>{routine.routineExercises.map(component)}</>;
};

export default RoutineExerciseList;
