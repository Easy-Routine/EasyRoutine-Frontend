import React from "react";
import WorkoutConfigAccordionList from "./components/WorkoutConfigAccordionList";
import {useParams} from "react-router-dom";

const RoutineConfigListPage = () => {
    const {routineConfigId} = useParams();

    return (
        <>
            <WorkoutConfigAccordionList
                routineConfigId={routineConfigId as string}
            />
        </>
    );
};

export default RoutineConfigListPage;
