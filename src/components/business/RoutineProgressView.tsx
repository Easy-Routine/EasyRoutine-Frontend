import Accordion from "components/box/Accordion/Accordion";
import styled from "styled-components";
import { RoutineConfig, SetConfig, WorkoutConfig } from "types/config";
import SeatedRowImage from "assets/image/seated-row.png";
import { useCallback, useState } from "react";
import WorkoutProgressAccordion from "./WorkoutProgressAccordion";
import useTimer from "hooks/client/useTimer";
import Modal from "components/box/Modal/Modal";
import useModal from "hooks/client/useModal";
import Confirm from "components/content/Confirm/Confirm";
import BottomBar from "components/box/BottomBar/BottomBar";
import TimerTemplate from "components/box/BottomBar/TimerTemplate";
import Button from "components/content/Button/Button";
import formatTime from "utils/formatTime";
import { ReactComponent as ClockIcon } from "assets/image/clock.svg";
import { ReactComponent as QuestionIcon } from "assets/image/question.svg";
import { ReactComponent as CompleteIcon } from "assets/image/complete.svg";
import { replace, useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const TimerText = styled.div`
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const RoutineProgressView = () => {
    const navigate = useNavigate();

    const {
        isOpen: isTimerModalOpen,
        handleOpenModal: handleOpenTimerModal,
        handleCloseModal: handleCloseTimerModal,
    } = useModal();
    const {
        isOpen: isCompletedModalOpen,
        handleOpenModal: handleOpenCompletedModal,
        handleCloseModal: handleCloseCompletedModal,
    } = useModal();
    const {
        isOpen: isUncompletedModalOpen,
        handleOpenModal: handleOpenUncompletedModal,
        handleCloseModal: handleCloseUncompletedModal,
    } = useModal();

    const { seconds, startTimer, skipTimer } = useTimer(
        useCallback(() => {
            handleCloseTimerModal();
        }, [])
    );

    const data: RoutineConfig = {
        id: "1",
        name: "월요일 루틴",
        color: "tomato",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
        workoutConfigs: [
            {
                id: "1",
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight,rep",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "1",
                        order: 1,
                        weight: 50,
                        rep: 10,
                        restSec: 15,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "2",
                        order: 2,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "3",
                        order: 3,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                ],
            },
            {
                id: "2",
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight,rep",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "4",
                        order: 1,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "5",
                        order: 2,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "6",
                        order: 3,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                ],
            },
            {
                id: "3",
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight,rep",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "7",
                        order: 1,
                        weight: 50,
                        rep: 10,
                        restSec: 15,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "8",
                        order: 2,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "9",
                        order: 3,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                ],
            },
        ],
    };

    const [routineConfigState, setRoutineConfigState] = useState(data);
    const [totalCompletedSetIds, setTotalCompletdSetIds] = useState(new Set());

    const handleSetCreate = (
        workoutConfigId: string,
        setConfigs: SetConfig[]
    ) => {
        const newRoutineConfigState = structuredClone(routineConfigState);
        const selectedWorkoutConfig = newRoutineConfigState.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig.id === workoutConfigId
        );
        if (selectedWorkoutConfig) {
            selectedWorkoutConfig.setConfigs = setConfigs;
        }
        setRoutineConfigState(newRoutineConfigState);
    };

    const handleSetDelete = (
        workoutConfigId: string,
        setConfigs: SetConfig[]
    ) => {
        const newRoutineConfigState = structuredClone(routineConfigState);
        const selectedWorkoutConfig = newRoutineConfigState.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig.id === workoutConfigId
        );
        if (selectedWorkoutConfig) {
            selectedWorkoutConfig.setConfigs = setConfigs;
        }
        setRoutineConfigState(newRoutineConfigState);
    };

    const handleSetComplete = (restSec: number) => {
        startTimer(restSec);
        handleOpenTimerModal();
    };

    const handleCompletedSetIdsMutate = (completedSetIds: string[]) => {
        setTotalCompletdSetIds((prevState) => {
            const newSet = new Set(prevState);
            completedSetIds.forEach((value) => newSet.add(value));
            return newSet;
        });
    };

    const handleTimerClick = () => {
        if (seconds === 0) {
            return;
        }
        handleOpenTimerModal();
    };

    const handleRoutineCompleteButtonClick = () => {
        const totalSetIds = new Set();

        // 모든 세트 ID를 routineConfigState에서 수집
        routineConfigState.workoutConfigs.forEach((workoutConfig) => {
            workoutConfig.setConfigs.forEach((setConfig) => {
                totalSetIds.add(setConfig.id); // 세트 ID 추가
            });
        });

        // totalCompletedSetIds와 totalSetIds 비교
        const isAllCompleted = totalSetIds.size === totalCompletedSetIds.size;

        console.log(totalSetIds, totalCompletedSetIds);

        if (isAllCompleted) {
            handleOpenCompletedModal();
        } else {
            handleOpenUncompletedModal();
        }
    };

    return (
        <Container>
            <Accordion.List<WorkoutConfig>
                data={routineConfigState.workoutConfigs}
                render={(item) => (
                    <WorkoutProgressAccordion
                        data={item}
                        onSetCreate={handleSetCreate}
                        onSetDelete={handleSetDelete}
                        onSetComplete={handleSetComplete}
                        onCompletedSetIdsMutate={handleCompletedSetIdsMutate}
                    />
                )}
            />
            <BottomBar>
                <TimerTemplate>
                    <TimerTemplate.Timer
                        value={seconds}
                        onTimerClick={handleTimerClick}
                    />
                    <TimerTemplate.ButtonWrapper>
                        <Button onClick={handleRoutineCompleteButtonClick}>
                            루틴 완료
                        </Button>
                    </TimerTemplate.ButtonWrapper>
                </TimerTemplate>
            </BottomBar>

            <TimerModal
                seconds={seconds}
                isOpen={isTimerModalOpen}
                onBackdropClick={() => handleCloseTimerModal}
                onCancelButtonClick={() => {
                    handleCloseTimerModal();
                }}
                onConfirmButtonClick={() => {
                    skipTimer();
                }}
            />
            <CompletedModal
                isOpen={isCompletedModalOpen}
                onBackdropClick={() => handleCloseCompletedModal}
                onCancelButtonClick={() => {
                    handleCloseCompletedModal();
                    navigate(ROUTES.CONFIG.LIST.PATH, { replace: true });
                }}
                onConfirmButtonClick={() => {
                    navigate(ROUTES.RECORD.LIST.PATH, { replace: true });
                }}
            />
            <UncompletedModal
                isOpen={isUncompletedModalOpen}
                onBackdropClick={() => handleCloseUncompletedModal}
                onCancelButtonClick={() => {
                    handleCloseUncompletedModal();
                }}
                onConfirmButtonClick={() => {
                    navigate(ROUTES.RECORD.LIST.PATH, { replace: true });
                }}
            />
        </Container>
    );
};

export default RoutineProgressView;

type TimerModalProps = {
    seconds: number;
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const TimerModal = ({
    seconds,
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: TimerModalProps) => {
    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <Confirm.IconBox>
                            <ClockIcon />
                        </Confirm.IconBox>
                        <Confirm.Title>휴식 타이머</Confirm.Title>
                        <Confirm.Description>
                            <TimerText>{formatTime(seconds)}</TimerText>
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="잠시 닫기"
                        confirmLabel="휴식 건너띄기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={onConfirmButtonClick}
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

type CompletedModalProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const CompletedModal = ({
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: CompletedModalProps) => {
    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <Confirm.IconBox>
                            <CompleteIcon />
                        </Confirm.IconBox>
                        <Confirm.Title>루틴 완료</Confirm.Title>
                        <Confirm.Description>
                            루틴이 완료되었습니다. 운동 기록을 확인하시려면 기록
                            페이지로 이동해 주세요.
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="홈으로 가기"
                        confirmLabel="기록 페이지로 가기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={onConfirmButtonClick}
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

type UnCompletedModalProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const UncompletedModal = ({
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: UnCompletedModalProps) => {
    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <Confirm.IconBox>
                            <QuestionIcon />
                        </Confirm.IconBox>
                        <Confirm.Title>루틴 미완료</Confirm.Title>
                        <Confirm.Description>
                            이 페이지를 벗어나면 지금까지 진행한 운동만 캘린더에
                            저장됩니다. 운동을 종료하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="운동 종료"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={onConfirmButtonClick}
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};
