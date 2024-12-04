import Accordion from "components/box/Accordion/Accordion";
import SummaryBox from "components/content/Summary/SummaryBox";
import useGetRoutineRecordAllDailyQuery from "hooks/server/useGetRoutineRecordAllDailyQuery";
import { WorkoutRecord } from "types/model";
import RoutineRecordDetailAccordion from "./RoutineRecordDetailAccordion";
import EmptyBoundary from "../EmptyBoundary";
import SimpleTextEmptyView from "components/content/EmptyView/SimpleTextEmptyView";

const RoutineRecordAllDailyList = ({
    selectedDate,
    onRoutineRecordDeleteButtonClick,
}: {
    selectedDate: Date;
    onRoutineRecordDeleteButtonClick: (routineRecordId: string) => void;
}) => {
    const { data: routineRecordAllDaily } =
        useGetRoutineRecordAllDailyQuery(selectedDate);

    const totalWeight = routineRecordAllDaily!.reduce((acc, record) => {
        return (
            acc +
            record.workoutRecords.reduce(
                (innerAcc: number, workoutRecord: WorkoutRecord) => {
                    return (
                        innerAcc +
                        workoutRecord.setRecords.reduce((setAcc, setRecord) => {
                            return (
                                setAcc + (setRecord.weight * setRecord.rep || 0)
                            ); // weight를 합산
                        }, 0)
                    );
                },
                0
            )
        );
    }, 0);

    const totalSeconds = routineRecordAllDaily!.reduce((acc, record) => {
        return acc + record.workoutTime;
    }, 0);

    return (
        <>
            <EmptyBoundary
                data={routineRecordAllDaily}
                fallback={
                    <SimpleTextEmptyView>
                        해당 날짜의 루틴 기록이 존재하지 않습니다.
                    </SimpleTextEmptyView>
                }
            >
                <SummaryBox seconds={totalSeconds} weight={totalWeight} />
                <Accordion.List
                    data={routineRecordAllDaily!}
                    render={(item) => (
                        <RoutineRecordDetailAccordion
                            key={item._id}
                            data={item}
                            onRoutineRecordDeleteButtonClick={
                                onRoutineRecordDeleteButtonClick
                            }
                        />
                    )}
                />
            </EmptyBoundary>
        </>
    );
};

export default RoutineRecordAllDailyList;
