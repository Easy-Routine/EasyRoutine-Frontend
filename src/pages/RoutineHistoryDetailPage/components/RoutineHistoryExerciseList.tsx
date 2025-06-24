import useRoutineHistoryGetQuery from "hooks/server/useRoutineHistoryGetQuery";
import React from "react";
import {useParams} from "react-router-dom";
import {RoutineExercise} from "types/model";

type RoutineHistoryExerciseListProps = {
    component: (value: RoutineExercise, key: number) => React.ReactNode;
};

const RoutineHistoryExerciseList = ({
    component,
}: RoutineHistoryExerciseListProps) => {
    const {routineHistoryId} = useParams<{routineHistoryId: string}>();

    const {data: routineHistoryData} = useRoutineHistoryGetQuery({
        routineHistoryId: routineHistoryId as string,
    });

    const routineHistory = routineHistoryData!;

    return <>{routineHistory.routineExercises.map(component)}</>;
};

export default RoutineHistoryExerciseList;
