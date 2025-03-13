import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";
import {SetConfig} from "types/model";
import useDeleteSetRecordOneMutation from "hooks/server/useDeleteSetRecordOneMutation";

type SetProgressDeleteButtonProps = {
    routineRecordId: string;
    workoutRecordId: string;
    setConfigs: SetConfig[];
    onSetProgressDeleteButtonClick: (
        setConfigs: SetConfig[],
        poppedSetConfigId: string,
    ) => boolean;
};

const SetProgressDeleteButton = ({
    routineRecordId,
    workoutRecordId,
    setConfigs,
    onSetProgressDeleteButtonClick,
}: SetProgressDeleteButtonProps) => {
    const {mutateAsync: deleteSetRecordOneMutate} =
        useDeleteSetRecordOneMutation();

    const handleSetDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();

        const newSetConfigs = structuredClone(setConfigs);
        const poppedSetConfig = newSetConfigs.pop() as SetConfig;

        const isSetRecordExist = onSetProgressDeleteButtonClick(
            newSetConfigs,
            poppedSetConfig._id,
        );

        if (isSetRecordExist) {
            await deleteSetRecordOneMutate({
                routineRecordId: routineRecordId,
                workoutRecordId: workoutRecordId,
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
