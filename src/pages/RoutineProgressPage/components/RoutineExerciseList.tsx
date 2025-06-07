import {useRoutineProgress} from "pages/RoutineProgressPage/components/RoutineProgressProvider";
import React from "react";
import {RoutineExercise} from "types/model";

type RoutineExerciseListProps = {
    component: (value: RoutineExercise, key: number) => React.ReactNode;
};

const RoutineExerciseList = ({component}: RoutineExerciseListProps) => {
    const {routine} = useRoutineProgress();

    return <>{routine.routineExercises.map(component)}</>;
};

export default RoutineExerciseList;
