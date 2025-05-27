import {useAccordion} from "headless/Accordion/Accordion";
import React, {MouseEventHandler, useEffect} from "react";
import {useRoutineProgress} from "../../RoutineProgressProvider";
import {RoutineExercise} from "types/model";

type RoutineExerciseReactiveTriggerProps = {
    routineExercise: RoutineExercise;
    children: React.ReactNode;
};

const RoutineExerciseReactiveTrigger = ({
    routineExercise,
    children,
}: RoutineExerciseReactiveTriggerProps) => {
    const {showAccordion, hideAccordion} = useAccordion();
    const {routine} = useRoutineProgress();
    const {sets} = routineExercise;

    // useEffect(() => {
    //     if (routineExercise.id === currentWorkoutId) {
    //         showAccordion();
    //         // onTriggerClick();
    //     } else {
    //         console.log("hide", routineExercise.id, currentWorkoutId);
    //         hideAccordion();
    //     }
    // }, [currentWorkoutId]);

    // const handleTriggerClick: MouseEventHandler<HTMLDivElement> = e => {
    //     e.stopPropagation();
    //     showAccordion();
    //     setCurrentWorkoutId(routineExercise.id);
    //     // 현재 운동의 세트 목록을 가져온다.
    //     const currentSetIds = sets.map(set => set.id);

    //     // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
    //     const currentWorkoutCompletedSetIds = currentSetIds.filter(id =>
    //         completedSetIds.includes(id),
    //     );

    //     // 현재 운동의 완료된 세트 배열의 길이를 구한다.(그게 현재 진행해야하는 세트의 인덱스)
    //     const currentSetIndex = currentWorkoutCompletedSetIds.length;

    //     const newCurrentSetId = sets[currentSetIndex]?.id ?? "";

    //     setCurrentSetId(newCurrentSetId);
    // };

    return <div>{children}</div>;
};

export default RoutineExerciseReactiveTrigger;
