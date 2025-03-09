import React from "react";
import RoutineConfigGetContainer from "./RoutineConfigGetContainer/RoutineConfigGetContainer";
import {useParams} from "react-router-dom";

const RoutineProgressPage = () => {
    const {routineConfigId} = useParams();
    return (
        <>
            <RoutineConfigGetContainer
                routineConfigId={routineConfigId as string}
            />
        </>
    );
};

export default RoutineProgressPage;
