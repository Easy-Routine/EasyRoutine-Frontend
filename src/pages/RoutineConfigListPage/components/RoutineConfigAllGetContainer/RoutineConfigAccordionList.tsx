import FlexBox from "headful/FlexBox/FlexBox";
import React from "react";
import {RoutineConfig} from "types/model";
import RoutineConfigAccordion from "./RoutineConfigAccordion";

type RoutineConfigAccordionListProps = {
    routineConfigs: RoutineConfig[];
};

const RoutineConfigAccordionList = ({
    routineConfigs,
}: RoutineConfigAccordionListProps) => {
    return (
        <>
            {routineConfigs.map(routineConfig => (
                <RoutineConfigAccordion
                    key={routineConfig._id}
                    routineConfig={routineConfig}
                />
            ))}
        </>
    );
};

export default RoutineConfigAccordionList;
