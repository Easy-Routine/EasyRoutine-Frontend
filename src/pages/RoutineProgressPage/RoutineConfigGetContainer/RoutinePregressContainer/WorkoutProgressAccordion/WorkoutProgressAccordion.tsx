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

type WorkoutProgressAccordionProps = {
    routineConfigId: string;
    routineRecordId: string;
    workoutConfig: WorkoutConfig;
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
};

const WorkoutProgressAccordion = ({
    routineConfigId,
    routineRecordId,
    workoutConfig,
    onSetCreateButtonClick,
    onSetDeleteButtonClick,
    onSetUpdateTableChange,
}: WorkoutProgressAccordionProps) => {
    const {workoutLibrary, setConfigs} = workoutConfig;
    const [workoutRecord, setWorkoutRecord] = useState<WorkoutRecord>(
        {} as WorkoutRecord,
    );

    const {mutateAsync: createWorkoutRecordOneMutate} =
        useCreateWorkoutRecordOneMutation();

    const [currentSetId, setCurrentSetId] = useState(
        workoutConfig.setConfigs[0]?._id,
    );
    const [completedSetIds, setCompletedSetIds] = useState<string[]>([]);

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
        setCurrentSetId(setConfigs[completedSetIds.length]._id);
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
        const filteredCompletedSetIds = completedSetIds.filter(
            _id => _id !== poppedSetConfigId,
        );
        setCompletedSetIds(filteredCompletedSetIds);

        return completedSetIds.includes(poppedSetConfigId);
    };

    const handleSetUpdateTableChange = (setConfigs: SetConfig[]) => {
        onSetUpdateTableChange(workoutConfig._id, setConfigs);
    };

    const workoutRecordId = workoutRecord?._id;

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
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
                        workoutConfigId={workoutConfig._id}
                        setConfigs={setConfigs}
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
                </SwipeableAccordion.Hidden>
                <WorkoutConfigDeleteButton
                    routineConfigId={routineConfigId}
                    workoutConfigId={workoutConfig._id}
                />
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};
export default WorkoutProgressAccordion;
