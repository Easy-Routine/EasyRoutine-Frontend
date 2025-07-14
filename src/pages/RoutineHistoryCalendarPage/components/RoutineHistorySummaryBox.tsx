import SummaryBox from "headful/SummaryBox/SummaryBox";
import useRoutineHistorySummaryGetQuery from "hooks/server/useRoutineHistorySummaeryGetQuery";
import React from "react";
import {useRoutineHistoryAllGetDailyProvider} from "./RoutineHistoryAllGetDailyProvider";

const RoutineHistorySummaryBox = () => {
    const {date} = useRoutineHistoryAllGetDailyProvider();
    const {
        data: {routineHistorySummary},
    } = useRoutineHistorySummaryGetQuery({date});

    const totalWorkoutTime = routineHistorySummary.totalWorkoutTime || 0; // 단위: 분
    const totalworkoutWeight = routineHistorySummary.totalworkoutWeight || 0;

    // 시간, 분 포맷 변환
    const hours = Math.floor(totalWorkoutTime / 60);
    const minutes = totalWorkoutTime % 60;
    const formattedTime = `${hours}시간 ${minutes}분`;

    // 무게 포맷 변환 (숫자 구분기호 추가)
    const formattedWeight = `${totalworkoutWeight.toLocaleString()}KG`;

    return (
        <SummaryBox>
            <SummaryBox.Text label="운동시간" value={formattedTime} />
            <SummaryBox.Text label="전체볼륨" value={formattedWeight} />
        </SummaryBox>
    );
};

export default RoutineHistorySummaryBox;
