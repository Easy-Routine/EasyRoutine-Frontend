import EmptyBoundary from "headful/EmptyBoundary/EmptyBoundary";
import RoutineListEmptyView from "headful/RoutineListEmptyView/RoutineListEmptyView";
import useRoutineAllGetQuery from "hooks/server/useRoutineAllGetQuery";
import useRoutineHistoryAllGetDailyQuery from "hooks/server/useRoutineHistortAllGetDailyQuery";
import React from "react";
import {Routine, RoutineHistory} from "types/model";
import {RoutineAllGetRes} from "types/routine";
import {RoutineHistoryAllGetDailyRes} from "types/routine-history";
import {useRoutineHistoryAllGetDailyProvider} from "./RoutineHistoryAllGetDailyProvider";

type RoutineHistoryAccordionListProps = {
    component: (value: RoutineHistory, key: number) => React.ReactNode;
};

const RoutineHistoryAccordionList = ({
    component,
}: RoutineHistoryAccordionListProps) => {
    // date를 프로바이더로 가져와야함
    const {date} = useRoutineHistoryAllGetDailyProvider();

    const {
        data: {routineHistories},
    } = useRoutineHistoryAllGetDailyQuery({date});

    const routinesHistories = routineHistories;

    return (
        <EmptyBoundary
            data={routinesHistories}
            fallback={<RoutineListEmptyView />}
        >
            {routinesHistories.map(component)}
        </EmptyBoundary>
    );
};

export default RoutineHistoryAccordionList;
