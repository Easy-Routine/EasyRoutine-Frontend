import {useRoutineProgress} from "pages/RoutineProgressPage/RoutinePregressContainer/RoutineProgressProvider";
import React from "react";
import {RoutineExercise} from "types/model";

type RoutineExerciseListProps = {
    component: (value: RoutineExercise, key: number) => React.ReactNode;
};

const RoutineExerciseList = ({component}: RoutineExerciseListProps) => {
    const {routineProgress} = useRoutineProgress();

    return <>{routineProgress.routineExercises.map(component)}</>;
};

export default RoutineExerciseList;
