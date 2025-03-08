import React from "react";
import {WorkoutConfig} from "types/model";
import WorkoutConfigAccordion from "./WorkoutConfigAccordion/WorkoutConfigAccordion";

type WorkoutConfigAccordionListProps = {
    workoutConfigs: WorkoutConfig[];
    routineConfigId: string;
};

const WorkoutConfigAccordionList = ({
    workoutConfigs,
    routineConfigId,
}: WorkoutConfigAccordionListProps) => {
    return (
        <>
            {workoutConfigs.map(workoutConfig => (
                <WorkoutConfigAccordion
                    key={workoutConfig._id}
                    routineConfigId={routineConfigId}
                    workoutConfig={workoutConfig}
                />
            ))}
        </>
    );
};

export default WorkoutConfigAccordionList;
