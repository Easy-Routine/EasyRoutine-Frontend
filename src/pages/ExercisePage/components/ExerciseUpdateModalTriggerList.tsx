import useExerciseAllGetQuery from "hooks/server/useExerciseAllGetQuery";
import {useRoutineProgress} from "pages/RoutineProgressPage/components/RoutineProgressProvider";
import React from "react";
import {Exercise, RoutineExercise} from "types/model";
import {useExerciseAllGetProvider} from "./ExerciseAllGetProvider";
import {ExerciseAllGetItem, ExerciseAllGetRes} from "types/exercise";

type ExerciseUpdateModalTriggerListProps = {
    component: (value: ExerciseAllGetItem, key: number) => React.ReactNode;
};

const RoutineExerciseList = ({
    component,
}: ExerciseUpdateModalTriggerListProps) => {
    // const {routine} = useRoutineProgress();
    const {name, category} = useExerciseAllGetProvider();

    // TODO: 쿼리 연결하기
    const {data} = useExerciseAllGetQuery({name, category});

    const exercises = data?.exercises ?? [];

    return <>{exercises.map(component)}</>;
};

export default RoutineExerciseList;
