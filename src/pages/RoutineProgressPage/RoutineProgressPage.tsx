import React from "react";
import RoutineConfigGetContainer from "./RoutineConfigGetContainer/RoutineConfigGetContainer";
import {useParams} from "react-router-dom";
import BottomBox from "headful/BottomBox/BottomBox";

const RoutineProgressPage = () => {
    const {routineConfigId} = useParams();
    return (
        <>
            <RoutineConfigGetContainer
                routineConfigId={routineConfigId as string}
            />
            <BottomBox />
        </>
    );
};

export default RoutineProgressPage;
