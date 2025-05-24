import styled from "styled-components";
import {Suspense, useState} from "react";
import useModal from "hooks/client/useModal";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import {useNavigate} from "react-router-dom";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";
import RoutineHistoryAllMonthlyCalendar from "./RoutineRecordAllMonthlyCalendar";
import RoutineHistoryAllDailyList from "./RoutineRecordAllDailyList";
import RoutineHistoryDeleteModal from "./RoutineRecordDeleteModal";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineHistoryListCalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [routineHistoryId, setRoutineHistoryId] = useState("");

    const {
        isOpen: isRoutineHistoryDeleteModalOpen,
        handleOpenModal: openRoutineHistoryDeleteModal,
        handleCloseModal: closeRoutineHistoryDeleteModal,
    } = useModal();
    const navigate = useNavigate();
    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            if (isRoutineHistoryDeleteModalOpen) {
                closeRoutineHistoryDeleteModal();
                return;
            }
            navigate(-1);
        },
        dependencies: [isRoutineHistoryDeleteModalOpen],
    });

    return (
        <Container>
            <RoutineHistoryAllMonthlyCalendar
                onNextMonthButtnClick={date => setCurrentMonth(date)}
                onPrevMonthButtonClick={date => setCurrentMonth(date)}
                onDateButtonClick={date => {
                    console.log(date, "해당 날짜의 운동 기록 가져오기");
                    setSelectedDate(date);
                }}
                currentMonth={currentMonth}
                dotDataKey={"routineHistorys"}
            />

            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    <RoutineHistoryAllDailyList
                        onRoutineHistoryDeleteButtonClick={(
                            routineHistoryId: string,
                        ) => {
                            setRoutineHistoryId(routineHistoryId);
                            openRoutineHistoryDeleteModal();
                        }}
                        selectedDate={selectedDate}
                    />
                </Suspense>
            </ErrorBoundary>

            {isRoutineHistoryDeleteModalOpen && (
                <RoutineHistoryDeleteModal
                    isOpen={isRoutineHistoryDeleteModalOpen}
                    routineHistoryId={routineHistoryId}
                    onBackdropClick={() => {
                        closeRoutineHistoryDeleteModal();
                    }}
                    onCancelButtonClick={() => {
                        closeRoutineHistoryDeleteModal();
                    }}
                    onConfirmButtonClick={() => {
                        closeRoutineHistoryDeleteModal();
                    }}
                />
            )}
        </Container>
    );
};

export default RoutineHistoryListCalendarView;
