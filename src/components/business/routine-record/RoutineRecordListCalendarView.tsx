import CustomCalendar from "components/content/CustomCalendar/CustomCalendar";
import styled from "styled-components";
import { useState } from "react";
import RoutineRecordDeleteModal from "./RoutineRecordDeleteModal";
import RoutineRecordDetailAccordion from "./RoutineRecordDetailAccordion";
import SummaryBox from "components/content/Summary/SummaryBox";
import Accordion from "components/box/Accordion/Accordion";
import useModal from "hooks/client/useModal";
import useGetRoutineRecordAllMonthlyQuery from "hooks/server/useGetRoutineRecordAllMonthlyQuery";
import useGetRoutineRecordAllDailyQuery from "hooks/server/useGetRoutineRecordAllDailyQuery";
import { WorkoutRecord } from "types/model";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordListCalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [routineRecordId, setRoutineRecordId] = useState("");

    const { data: routineRecordAllMonthly } =
        useGetRoutineRecordAllMonthlyQuery(currentMonth);

    const { data: routineRecordAllDaily } =
        useGetRoutineRecordAllDailyQuery(selectedDate);

    const {
        isOpen: isRoutineRecordDeleteModalOpen,
        handleOpenModal: openRoutineRecordDeleteModal,
        handleCloseModal: closeRoutineRecordDeleteModal,
    } = useModal();

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
        <Container>
            <CustomCalendar
                onNextMonthButtnClick={(date) => setCurrentMonth(date)}
                onPrevMonthButtonClick={(date) => setCurrentMonth(date)}
                onDateButtonClick={(date) => {
                    console.log(date, "해당 날짜의 운동 기록 가져오기");
                    setSelectedDate(date);
                }}
                dotDataByDate={routineRecordAllMonthly!}
                dotDataKey={"routineRecords"}
            />

            <SummaryBox seconds={totalSeconds} weight={totalWeight} />
            <Accordion.List
                data={routineRecordAllDaily!}
                render={(item) => (
                    <RoutineRecordDetailAccordion
                        key={item._id}
                        data={item}
                        onRoutineRecordDeleteButtonClick={(
                            routineRecordId: string
                        ) => {
                            setRoutineRecordId(routineRecordId);
                            openRoutineRecordDeleteModal();
                        }}
                    />
                )}
            />
            <ErrorBoundary>
                {isRoutineRecordDeleteModalOpen && (
                    <RoutineRecordDeleteModal
                        isOpen={isRoutineRecordDeleteModalOpen}
                        routineRecordId={routineRecordId}
                        onBackdropClick={() => {
                            closeRoutineRecordDeleteModal();
                        }}
                        onCancelButtonClick={() => {
                            closeRoutineRecordDeleteModal();
                        }}
                        onConfirmButtonClick={() => {
                            closeRoutineRecordDeleteModal();
                        }}
                    />
                )}
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineRecordListCalendarView;
