import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";
import {SetConfig, WorkoutConfig} from "types/model";
import useDeleteSetRecordOneMutation from "hooks/server/useDeleteSetRecordOneMutation";
import {useRoutineProgress} from "../../RoutineProgressProvider";

type SetProgressDeleteButtonProps = {
    // routineRecordId: string;
    // workoutRecordId: string;
    // setConfigs: SetConfig[];
    // onSetProgressDeleteButtonClick: (
    //     setConfigs: SetConfig[],
    //     poppedSetConfigId: string,
    // ) => boolean;
};

const SetProgressDeleteButton = (
    {
        // routineRecordId,
        // workoutRecordId,
        // setConfigs,
        // onSetProgressDeleteButtonClick,
    }: SetProgressDeleteButtonProps,
) => {
    const {mutateAsync: deleteSetRecordOneMutate} =
        useDeleteSetRecordOneMutation();
    const {
        setConfigs,
        completedSetIds,
        setCompletedSetIds,
        routineProgress,
        currentWorkoutId,
        currentSetId,
        setRoutineProgress,
    } = useRoutineProgress();

    const handleSetDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();
        console.log("세트 삭제");

        const newRoutineProgress = structuredClone(routineProgress);
        const currentWorkoutConfig = newRoutineProgress.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig._id === currentWorkoutId,
        ) as WorkoutConfig;

        const {setConfigs} = currentWorkoutConfig;

        const newSetConfigs = structuredClone(setConfigs);
        const poppedSetConfig = newSetConfigs.pop() as SetConfig;

        currentWorkoutConfig.setConfigs = newSetConfigs;

        const filteredCompletedSetIds = completedSetIds.filter(
            _id => _id !== poppedSetConfig._id,
        );

        setCompletedSetIds(filteredCompletedSetIds);
        setRoutineProgress(newRoutineProgress);

        const isSetRecordExist = completedSetIds.includes(poppedSetConfig._id);

        if (isSetRecordExist) {
            await deleteSetRecordOneMutate({
                routineRecordId: routineProgress._id,
                workoutRecordId: currentWorkoutId,
            });
        }
    };

    return (
        <FlexBox
            gap={16}
            alignItems="center"
            onClick={handleSetDeleteButtonClick}
        >
            <MinusIcon color={"var(--color-gray-dark)"} />
            <Text color={"var(--color-gray-dark)"}>세트 삭제하기</Text>
        </FlexBox>
    );
};

export default SetProgressDeleteButton;
