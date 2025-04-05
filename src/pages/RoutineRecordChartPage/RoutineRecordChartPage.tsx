import NavigateBottomBox from "components/NavigateBottomBox";
import React from "react";
import {useLocation} from "react-router-dom";

const RoutineRecordChartPage = () => {
    const location = useLocation();
    return (
        <>
            RoutineRecordChartPage
            <NavigateBottomBox path={location.pathname} />
        </>
    );
};

export default RoutineRecordChartPage;
