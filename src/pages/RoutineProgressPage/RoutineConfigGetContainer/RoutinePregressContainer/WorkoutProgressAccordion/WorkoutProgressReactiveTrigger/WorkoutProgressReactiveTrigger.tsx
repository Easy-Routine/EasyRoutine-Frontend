import {useAccordion} from "headless/Accordion/Accordion";
import React, {MouseEventHandler, useEffect} from "react";
import {useRoutineProgress} from "../../RoutineProgressProvider";
import {WorkoutConfig} from "types/model";

type WorkoutProgressReactiveTriggerProps = {
    workoutConfig: WorkoutConfig;
    children: React.ReactNode;
};

const WorkoutProgressReactiveTrigger = ({
    workoutConfig,
    children,
}: WorkoutProgressReactiveTriggerProps) => {
    const {showAccordion, hideAccordion} = useAccordion();
    const {
        routineProgress,
        currentWorkoutId,
        completedSetIds,
        setCurrentWorkoutId,
        setCurrentSetId,
    } = useRoutineProgress();
    const {setConfigs} = workoutConfig;

    useEffect(() => {
        if (workoutConfig._id === currentWorkoutId) {
            showAccordion();
            // onTriggerClick();
        } else {
            console.log("hide", workoutConfig._id, currentWorkoutId);
            hideAccordion();
        }
    }, [currentWorkoutId]);

    const handleTriggerClick: MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();
        showAccordion();
        setCurrentWorkoutId(workoutConfig._id);
        // 현재 운동의 세트 목록을 가져온다.
        const currentSetIds = setConfigs.map(setConfig => setConfig._id);

        // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
        const currentWorkoutCompletedSetIds = currentSetIds.filter(id =>
            completedSetIds.includes(id),
        );

        // 현재 운동의 완료된 세트 배열의 길이를 구한다.(그게 현재 진행해야하는 세트의 인덱스)
        const currentSetIndex = currentWorkoutCompletedSetIds.length;

        const newCurrentSetId = setConfigs[currentSetIndex]?._id ?? "";

        setCurrentSetId(newCurrentSetId);
    };

    return <div onClick={handleTriggerClick}>{children}</div>;
};

export default WorkoutProgressReactiveTrigger;
