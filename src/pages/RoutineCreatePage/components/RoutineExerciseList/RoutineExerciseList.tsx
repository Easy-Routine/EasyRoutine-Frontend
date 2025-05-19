import React from "react";
import {RoutineExercise} from "types/model";
import {useRoutineCreate} from "../RoutineCreateProvider/RoutineCreateProvider";

type RoutineExerciseListProps = {
    component: (value: RoutineExercise, key: number) => React.ReactNode;
};

const RoutineExerciseList = ({component}: RoutineExerciseListProps) => {
    const {routine} = useRoutineCreate();

    return <>{routine.routineExercises.map(component)}</>;
};

export default RoutineExerciseList;
