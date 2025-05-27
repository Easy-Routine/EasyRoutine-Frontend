import BasicButton from "headful/BasicButton/BasicButton";
import {useRoutineProgress} from "pages/RoutineProgressPage/RoutinePregressContainer/RoutineProgressProvider";
import React from "react";

const RoutineCompleteButton = () => {
    const {routine, routineHistory} = useRoutineProgress();

    const totalRoutineSets = routine.routineExercises.flatMap(
        exercise => exercise.sets,
    ).length;

    const totalHistorySets = routineHistory.routineExercises.flatMap(
        exercise => exercise.sets,
    ).length;

    console.log(totalHistorySets, totalRoutineSets);

    const isRoutineCompleted = totalRoutineSets === totalHistorySets;

    const handleButtonClick = () => {
        isRoutineCompleted ? alert("루틴 완료!") : alert("루틴 미완료!");
    };

    return <BasicButton onClick={handleButtonClick}>루틴 완료</BasicButton>;
};

export default RoutineCompleteButton;
