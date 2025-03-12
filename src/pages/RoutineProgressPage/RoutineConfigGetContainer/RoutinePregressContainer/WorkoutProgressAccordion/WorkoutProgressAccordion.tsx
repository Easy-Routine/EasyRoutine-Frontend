import FlexBox from "headful/FlexBox/FlexBox";
import Image from "headful/Image/Image";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {SetConfig, WorkoutConfig, WorkoutRecord} from "types/model";
import SetConfigUpdateTable from "./SetProgressUpdateTable/SetProgressUpdateTable";
import WorkoutConfigDeleteButton from "./WorkoutConfigDeleteButton/WorkoutConfigDeleteButton";
import SetProgressCreateButton from "./SetProgressCreateButton/SetProgressCreateButton";
import {useEffect, useState} from "react";
import SetProgressDeleteButton from "./SetProgressDeleteButton/SetProgressDeleteButton";
import useCreateWorkoutRecordOneMutation from "hooks/server/useCreateWorkoutRecordOneMutation";
import SetProgressUpdateTable from "./SetProgressUpdateTable/SetProgressUpdateTable";
import BasicButton from "headful/BasicButton/BasicButton";
import SetProgressCompleteButton from "./SetProgressCompleteButton/SetProgressCompleteButton";
import WorkoutProgressReactiveTrigger from "./WorkoutProgressReactiveTrigger/WorkoutProgressReactiveTrigger";

type WorkoutProgressAccordionProps = {
    routineConfigId: string;
    routineRecordId: string;
    workoutConfig: WorkoutConfig;
    currentWorkoutConfigId: string;
    onSetCreateButtonClick: (
        workoutConfigId: string,
        setConfigs: SetConfig[],
    ) => void;
    onSetDeleteButtonClick: (
        workoutConfigId: string,
        setConfigs: SetConfig[],
        poppedSetConfigId: string,
    ) => void;

    onSetUpdateTableChange: (
        workoutConfigId: string,
        setConfigs: SetConfig[],
    ) => void;

    onSetCompleteButtonClick: (
        workoutConfigId: string,
        setConfigs: SetConfig[],
        currentSetId: string,
    ) => void;
    onWorkoutProgressReactiveTriggerClick: (workoutConfigId: string) => void;
};

const WorkoutProgressAccordion = ({
    routineConfigId,
    routineRecordId,
    workoutConfig,
    currentWorkoutConfigId,
    onSetCreateButtonClick,
    onSetDeleteButtonClick,
    onSetUpdateTableChange,
    onSetCompleteButtonClick,
    onWorkoutProgressReactiveTriggerClick,
}: WorkoutProgressAccordionProps) => {
    const {workoutLibrary, setConfigs} = workoutConfig;
    const [workoutRecord, setWorkoutRecord] = useState<WorkoutRecord>(
        {} as WorkoutRecord,
    );

    const {mutateAsync: createWorkoutRecordOneMutate} =
        useCreateWorkoutRecordOneMutation();

    const [currentSetConfigId, setCurrentSetConfigId] = useState(
        workoutConfig.setConfigs[0]?._id,
    );
    const [completedSetConfigIds, setCompletedSetConfigIds] = useState<
        string[]
    >([]);

    useEffect(() => {
        // 컴포넌트가 마운트 될때 운동 기록 데이터를 생성
        if (routineRecordId && workoutConfig) {
            (async () => {
                const response = await createWorkoutRecordOneMutate({
                    routineRecordId,
                    workoutLibrary,
                });
                response && setWorkoutRecord(response);
            })();
        }
    }, [createWorkoutRecordOneMutate, routineRecordId]);

    const handleSetCreateButtonClick = (setConfigs: SetConfig[]) => {
        onSetCreateButtonClick(workoutConfig._id, setConfigs);
        setCurrentSetConfigId(setConfigs[completedSetConfigIds.length]._id);
    };

    const handleSetDeleteButtonClick = (
        setConfigs: SetConfig[],
        poppedSetConfigId: string,
    ) => {
        onSetDeleteButtonClick(
            workoutConfig._id,
            setConfigs,
            poppedSetConfigId,
        );

        // 완료 세트에서 팝된 세트설정id를 삭제한다.
        const filteredCompletedSetIds = completedSetConfigIds.filter(
            _id => _id !== poppedSetConfigId,
        );
        setCompletedSetConfigIds(filteredCompletedSetIds);
        // 완료된 세트 아이디 배열에 팝된 세트 아이디가 존재한다면 세트기록에 있는걸로 간주한다.
        return completedSetConfigIds.includes(poppedSetConfigId);
    };

    const handleSetUpdateTableChange = (setConfigs: SetConfig[]) => {
        onSetUpdateTableChange(workoutConfig._id, setConfigs);
    };

    const handleSetCompleteButtonClick = (setConfigs: SetConfig[]) => {
        // 완료된 세트 아이디 배열에 현재 세트 아이디를 넣는다.
        const newCompletedSetIds = structuredClone(completedSetConfigIds);
        newCompletedSetIds.push(currentSetConfigId);
        setCompletedSetConfigIds(newCompletedSetIds);
        // 현재 세트 아이디는 완료한 세트 보다 다음 이 되어야 한다.

        console.log(setConfigs, completedSetConfigIds.length);
        setCurrentSetConfigId(setConfigs[newCompletedSetIds.length]?._id);

        // 현재 완료한 세트의아이디를 통해 현재 세트 설정을 찾는다.
        const currentSetConfig = setConfigs.find(
            setConfig => setConfig._id === currentSetConfigId,
        ) as SetConfig;

        onSetCompleteButtonClick(
            workoutConfig._id,
            setConfigs,
            currentSetConfigId,
        );

        return currentSetConfig;
    };
    const handleWorkoutProgressReactiveTriggerClick = () => {
        onWorkoutProgressReactiveTriggerClick(workoutConfig._id);
    };

    const workoutRecordId = workoutRecord?._id;

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <WorkoutProgressReactiveTrigger
                    currentWorkoutConfigId={currentWorkoutConfigId}
                    workoutConfigId={workoutConfig._id}
                    onTriggerClick={handleWorkoutProgressReactiveTriggerClick}
                >
                    <SwipeableAccordion.Visible>
                        <FlexBox gap={16}>
                            <Image
                                width={60}
                                height={60}
                                src={workoutLibrary.image}
                            />
                            <FlexBox
                                flexDirection="column"
                                justifyContent="space-around"
                            >
                                <Text
                                    fontSize={"var(--fontSize-lg)"}
                                    fontWeight={"var(--fontWeight-semibold)"}
                                    color={"var(--text-black)"}
                                >
                                    {workoutLibrary.name}
                                </Text>
                                <Text
                                    fontSize={"var(--fontSize-sm)"}
                                    fontWeight={"var(--fontWeight-regular)"}
                                    color={"var(--text-black)"}
                                >
                                    {setConfigs.length}종목
                                </Text>
                            </FlexBox>
                        </FlexBox>
                    </SwipeableAccordion.Visible>
                    <SwipeableAccordion.Hidden>
                        <SetProgressUpdateTable
                            onSetUpdateTableChange={handleSetUpdateTableChange}
                            workoutLibraryType={workoutLibrary.type}
                            setConfigs={setConfigs}
                            currentSetConfigId={currentSetConfigId}
                            completedSetConfigIds={completedSetConfigIds}
                        />
                        <FlexBox
                            padding={{top: 10, bottom: 10}}
                            justifyContent="space-around"
                        >
                            <SetProgressDeleteButton
                                routineRecordId={routineRecordId}
                                workoutRecordId={workoutRecordId}
                                setConfigs={setConfigs}
                                onSetProgressDeleteButtonClick={
                                    handleSetDeleteButtonClick
                                }
                            />
                            <SetProgressCreateButton
                                setConfigs={setConfigs}
                                onSetProgressCreateButtonClick={
                                    handleSetCreateButtonClick
                                }
                            />
                        </FlexBox>
                        <SetProgressCompleteButton
                            routineRecordId={routineRecordId}
                            workoutRecordId={workoutRecordId}
                            setConfigs={setConfigs}
                            completedSetConfigIds={completedSetConfigIds}
                            onSetProgressCompleteButtonClick={
                                handleSetCompleteButtonClick
                            }
                        />
                    </SwipeableAccordion.Hidden>
                    <WorkoutConfigDeleteButton
                        routineConfigId={routineConfigId}
                        workoutConfigId={workoutConfig._id}
                    />
                </WorkoutProgressReactiveTrigger>
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};
export default WorkoutProgressAccordion;
