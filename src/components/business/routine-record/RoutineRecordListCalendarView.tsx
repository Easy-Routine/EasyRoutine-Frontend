import styled from "styled-components";
import {Suspense, useState} from "react";
import RoutineRecordDeleteModal from "./RoutineRecordDeleteModal";
import useModal from "hooks/client/useModal";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import RoutineRecordAllDailyList from "./RoutineRecordAllDailyList";
import RoutineRecordAllMonthlyCalendar from "./RoutineRecordAllMonthlyCalendar";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import {useNavigate} from "react-router-dom";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordListCalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [routineRecordId, setRoutineRecordId] = useState("");

    const {
        isOpen: isRoutineRecordDeleteModalOpen,
        handleOpenModal: openRoutineRecordDeleteModal,
        handleCloseModal: closeRoutineRecordDeleteModal,
    } = useModal();
    const navigate = useNavigate();
    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            if (isRoutineRecordDeleteModalOpen) {
                closeRoutineRecordDeleteModal();
                return;
            }
            navigate(-1);
        },
        dependencies: [isRoutineRecordDeleteModalOpen],
    });

    return (
        <Container>
            <RoutineRecordAllMonthlyCalendar
                onNextMonthButtnClick={date => setCurrentMonth(date)}
                onPrevMonthButtonClick={date => setCurrentMonth(date)}
                onDateButtonClick={date => {
                    console.log(date, "해당 날짜의 운동 기록 가져오기");
                    setSelectedDate(date);
                }}
                currentMonth={currentMonth}
                dotDataKey={"routineRecords"}
            />

            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    <RoutineRecordAllDailyList
                        onRoutineRecordDeleteButtonClick={(
                            routineRecordId: string,
                        ) => {
                            setRoutineRecordId(routineRecordId);
                            openRoutineRecordDeleteModal();
                        }}
                        selectedDate={selectedDate}
                    />
                </Suspense>
            </ErrorBoundary>

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
        </Container>
    );
};

export default RoutineRecordListCalendarView;
