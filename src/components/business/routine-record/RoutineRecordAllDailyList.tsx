import Accordion from "components/box/Accordion/Accordion";
import SummaryBox from "components/content/Summary/SummaryBox";
import useGetRoutineRecordAllDailyQuery from "hooks/server/useGetRoutineRecordAllDailyQuery";
import { WorkoutRecord } from "types/model";
import RoutineRecordDetailAccordion from "./RoutineRecordDetailAccordion";

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
        </>
    );
};

export default RoutineRecordAllDailyList;
