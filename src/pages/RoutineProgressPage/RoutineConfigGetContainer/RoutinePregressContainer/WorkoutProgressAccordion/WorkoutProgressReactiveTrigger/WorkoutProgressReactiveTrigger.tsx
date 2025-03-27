import {useAccordion} from "headless/Accordion/Accordion";
import React, {MouseEventHandler, useEffect} from "react";

type WorkoutProgressReactiveTriggerProps = {
    workoutConfigId: string;
    currentWorkoutConfigId: string;
    onTriggerClick: () => void;
    children: React.ReactNode;
};

const WorkoutProgressReactiveTrigger = ({
    workoutConfigId,
    currentWorkoutConfigId,
    onTriggerClick,
    children,
}: WorkoutProgressReactiveTriggerProps) => {
    const {showAccordion, hideAccordion} = useAccordion();

    useEffect(() => {
        if (workoutConfigId === currentWorkoutConfigId) {
            showAccordion();
            onTriggerClick();
        } else {
            console.log("hide", workoutConfigId, currentWorkoutConfigId);
            hideAccordion();
        }
    }, [currentWorkoutConfigId]);

    const handleTriggerClick: MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();
        showAccordion();
        onTriggerClick();
    };

    return <div onClick={handleTriggerClick}>{children}</div>;
};

export default WorkoutProgressReactiveTrigger;
