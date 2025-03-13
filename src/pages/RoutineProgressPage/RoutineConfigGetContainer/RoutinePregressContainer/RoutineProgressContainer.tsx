import FlexBox from "headful/Flex/Flex";
import {useEffect, useState} from "react";
import {
    RoutineConfig,
    RoutineRecord,
    SetConfig,
    WorkoutConfig,
} from "types/model";
import List from "components/box/Accordion/List";
import WorkoutProgressAccordion from "./WorkoutProgressAccordion/WorkoutProgressAccordion";
import useCreateRoutineRecordOneMutation from "hooks/server/useCreateRoutineRecordOneMutation";
import BottomBox from "headful/BottomBox/BottomBox";
import BottomBoxPortal from "components/BottomBoxPortal/BottomBoxPortal";
import Flex from "headful/Flex/Flex";
import BasicTimer from "headful/BasicTimer/BasicTimer";
import useTimer from "hooks/client/useTimer";
import WorkoutRestSecTimer from "./WorkoutRestSecTimer/WorkoutRestSecTimer";

type RoutineProgressContainerProps = {
    routineConfig: RoutineConfig;
};

const RoutineProgressContainer = ({
    routineConfig,
}: RoutineProgressContainerProps) => {
    const [totalCompletedSetIds, setTotalCompletdSetIds] = useState(new Set());
    const [routineProgress, setRoutineProgress] = useState(routineConfig);
    const [routineRecord, setRoutineRecord] = useState<RoutineRecord>(
        {} as RoutineRecord,
    );
    const [currentWorkoutConfigId, setCurrentWorkoutConfigId] = useState(
        routineProgress.workoutConfigs[0]._id,
    );

    const {endTime, startTimer, isActive, skipTimer, remainingTime} =
        useTimer();

    const {mutateAsync: createRoutineRecordOneMutate} =
        useCreateRoutineRecordOneMutation();

    // 처음 루틴 진행 페이지가 열릴 때
    useEffect(() => {
        (async () => {
            const response = (await createRoutineRecordOneMutate({
                name: routineProgress.name,
                color: routineProgress.color,
                userId: routineProgress.userId,
            })) as RoutineRecord;

            response && setRoutineRecord(response);
        })();
    }, []);

    const handleSetCreateButtonClick = (
        workoutConfigId: string,
        setConfigs: SetConfig[],
    ) => {
        const newRoutineProgress = structuredClone(routineProgress);
        // 현재 세트추가 버튼을 누른 운동아코디언의 ID를 찾는다.
        const currentWorkoutConfig = newRoutineProgress.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig._id === workoutConfigId,
        ) as WorkoutConfig;
        // 선택된 운동 설정의 세트설정을 업데이트 시킵니다.
        currentWorkoutConfig.setConfigs = setConfigs;

        setRoutineProgress(newRoutineProgress);
    };

    const handleSetDeleteButtonClick = (
        workoutConfigId: string,
        setConfigs: SetConfig[],
        poppedSetConfigId: string,
    ) => {
        const newRoutineProgress = structuredClone(routineProgress);

        // 현재 운동설정을 찾는다.
        const currentWorkoutConfig = newRoutineProgress.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig._id === workoutConfigId,
        ) as WorkoutConfig;
        currentWorkoutConfig.setConfigs = setConfigs;

        setRoutineProgress(newRoutineProgress);
        const newTotalCompletedSetIds = new Set(totalCompletedSetIds);
        newTotalCompletedSetIds.delete(poppedSetConfigId);
        setTotalCompletdSetIds(newTotalCompletedSetIds);
    };

    const handleSetUpdateTableChange = (
        workoutConfigId: string,
        setConfigs: SetConfig[],
    ) => {
        const newRoutineProgress = structuredClone(routineProgress);
        const currentWorkoutConfig = newRoutineProgress.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig._id === workoutConfigId,
        ) as WorkoutConfig;

        currentWorkoutConfig.setConfigs = setConfigs;

        setRoutineProgress(newRoutineProgress);
    };

    const handleSetCompleteButtonClick = (
        workoutConfigId: string,
        setConfigs: SetConfig[],
        currentSetId: string,
    ) => {
        const isLastSet =
            currentSetId === setConfigs[setConfigs.length - 1]._id;

        // 현재 완료한 세트가 마지막 세트라면
        if (isLastSet) {
            const newRoutineProgress = structuredClone(routineProgress);

            const currentWorkoutConfigIndex =
                newRoutineProgress.workoutConfigs.findIndex(
                    (workoutConfig: WorkoutConfig) =>
                        workoutConfig._id === workoutConfigId,
                );
            // 다음 운동이 존재한다면
            const hasNextWorkout =
                currentWorkoutConfigIndex + 1 <
                newRoutineProgress.workoutConfigs.length;
            if (hasNextWorkout) {
                setCurrentWorkoutConfigId(
                    newRoutineProgress.workoutConfigs[
                        currentWorkoutConfigIndex + 1
                    ]._id,
                );
            }
        }

        const totalSetIds = new Set();

        // 모든 세트 ID를 routineConfigState에서 수집
        routineProgress.workoutConfigs.forEach(workoutConfig => {
            workoutConfig.setConfigs.forEach(setConfig => {
                console.log("새로추가되는 세트", setConfig._id);
                totalSetIds.add(setConfig._id); // 세트 _id 추가
            });
        });
        // 각 운동에서 가져온 완료된 세트 아이디에 현재 세트완료 아이디를 넣는다.
        const newTotalCompletedSetIds = totalCompletedSetIds.add(currentSetId);

        // totalCompletedSetIds와 totalSetIds 비교
        const isAllCompleted =
            totalSetIds.size === newTotalCompletedSetIds.size;

        setTotalCompletdSetIds(newTotalCompletedSetIds);

        if (isAllCompleted) {
            console.log("모든 세트 완료");
            // handleOpenCompletedModal();
        } else {
            console.log("모든 세트 미완료");

            const currentSetConfig = setConfigs.find(
                setConfig => setConfig._id === currentSetId,
            );
            console.log("커런트", currentSetConfig?.restSec);
            startTimer(currentSetConfig?.restSec as number);
            // handleOpenTimerModal();
        }
    };

    const handleWorkoutProgressReactiveTriggerClick = (
        workoutConfigId: string,
    ) => {
        setCurrentWorkoutConfigId(workoutConfigId);
    };

    return (
        <>
            <FlexBox flexDirection="column" gap={20}>
                <List<WorkoutConfig>
                    data={routineProgress.workoutConfigs}
                    render={workoutConfig => (
                        <WorkoutProgressAccordion
                            routineConfigId={routineConfig._id}
                            routineRecordId={routineRecord._id}
                            workoutConfig={workoutConfig}
                            currentWorkoutConfigId={currentWorkoutConfigId}
                            onSetCreateButtonClick={handleSetCreateButtonClick}
                            onSetDeleteButtonClick={handleSetDeleteButtonClick}
                            onSetUpdateTableChange={handleSetUpdateTableChange}
                            onSetCompleteButtonClick={
                                handleSetCompleteButtonClick
                            }
                            onWorkoutProgressReactiveTriggerClick={
                                handleWorkoutProgressReactiveTriggerClick
                            }
                        />
                    )}
                />
            </FlexBox>
            <BottomBoxPortal>
                <Flex>
                    <WorkoutRestSecTimer remainingTime={remainingTime} />
                </Flex>
            </BottomBoxPortal>
        </>
    );
};

export default RoutineProgressContainer;
