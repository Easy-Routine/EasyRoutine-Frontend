import Accordion from "components/box/Accordion/Accordion";
import SummaryBox from "components/content/Summary/SummaryBox";
import {RoutineExercise} from "types/model";
import EmptyBoundary from "../EmptyBoundary";
import SimpleTextEmptyView from "components/content/EmptyView/SimpleTextEmptyView";
import useGetRoutineHistoryAllDailyQuery from "hooks/server/useGetRoutineHistoryAllDailyQuery";
import RoutineHistoryDetailAccordion from "./RoutineRecordDetailAccordion";

const RoutineHistoryAllDailyList = ({
    selectedDate,
    onRoutineHistoryDeleteButtonClick,
}: {
    selectedDate: Date;
    onRoutineHistoryDeleteButtonClick: (routineHistoryId: string) => void;
}) => {
    const {data: routineHistoryAllDaily} =
        useGetRoutineHistoryAllDailyQuery(selectedDate);

    const totalWeight = routineHistoryAllDaily!.reduce((acc, record) => {
        return (
            acc +
            record.routineExercises.reduce(
                (innerAcc: number, routineExercise: RoutineExercise) => {
                    return (
                        innerAcc +
                        routineExercise.sets.reduce((setAcc, set) => {
                            return setAcc + (set?.weight * set?.rep || 0); // weight를 합산
                        }, 0)
                    );
                },
                0,
            )
        );
    }, 0);

    const totalSeconds = routineHistoryAllDaily!.reduce((acc, record) => {
        return acc + record.workoutTime;
    }, 0);

    return (
        <>
            <EmptyBoundary
                data={routineHistoryAllDaily}
                fallback={
                    <SimpleTextEmptyView>
                        해당 날짜의 루틴 기록이 존재하지 않습니다.
                    </SimpleTextEmptyView>
                }
            >
                <SummaryBox seconds={totalSeconds} weight={totalWeight} />
                <Accordion.List
                    data={routineHistoryAllDaily!}
                    render={item => (
                        <RoutineHistoryDetailAccordion
                            key={item.id}
                            data={item}
                            onRoutineHistoryDeleteButtonClick={
                                onRoutineHistoryDeleteButtonClick
                            }
                        />
                    )}
                />
            </EmptyBoundary>
        </>
    );
};

export default RoutineHistoryAllDailyList;
