import useExerciseAllGetQuery from "hooks/server/useExerciseAllGetQuery";
import {useRoutineProgress} from "pages/RoutineProgressPage/RoutinePregressContainer/RoutineProgressProvider";
import React from "react";
import {Exercise, RoutineExercise} from "types/model";
import {useExerciseAllGetProvider} from "./ExerciseAllGetProvider";
import {ExerciseAllGetRes} from "types/exercise";

type ExerciseUpdateModalTriggerListProps = {
    component: (
        value: ExerciseAllGetRes[number],
        key: number,
    ) => React.ReactNode;
};

const RoutineExerciseList = ({
    component,
}: ExerciseUpdateModalTriggerListProps) => {
    // const {routine} = useRoutineProgress();
    const {name, category} = useExerciseAllGetProvider();

    // TODO: 쿼리 연결하기
    const {data: exerciseAllData} = useExerciseAllGetQuery({name, category});

    const exercises = exerciseAllData ?? [];

    return <>{exercises.map(component)}</>;
};

export default RoutineExerciseList;
