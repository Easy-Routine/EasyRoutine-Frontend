import FlexBox from "headful/FlexBox/FlexBox";
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

    const workoutConfigs = routineProgress.workoutConfigs;
    const routineConfigId = routineProgress._id;
    const routineRecordId = routineRecord?._id;

    useEffect(() => {
        console.log("routineProgress", routineProgress);
    }, [routineProgress]);

    return (
        <FlexBox flexDirection="column" gap={20}>
            <List<WorkoutConfig>
                data={workoutConfigs}
                render={workoutConfig => (
                    <WorkoutProgressAccordion
                        routineConfigId={routineConfigId}
                        routineRecordId={routineRecordId}
                        workoutConfig={workoutConfig}
                        onSetCreateButtonClick={handleSetCreateButtonClick}
                        onSetDeleteButtonClick={handleSetDeleteButtonClick}
                        onSetUpdateTableChange={handleSetUpdateTableChange}
                    />
                )}
            />
        </FlexBox>
    );
};

export default RoutineProgressContainer;
