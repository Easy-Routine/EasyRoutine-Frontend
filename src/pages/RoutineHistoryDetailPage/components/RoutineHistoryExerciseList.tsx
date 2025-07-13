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
    const {routineHistoryId} = useParams();
    const {
        data: {routineHistory},
    } = useRoutineHistoryGetQuery({
        routineHistoryId: parseInt(routineHistoryId as string),
    });

    return <>{routineHistory.routineExercises.map(component)}</>;
};

export default RoutineHistoryExerciseList;
