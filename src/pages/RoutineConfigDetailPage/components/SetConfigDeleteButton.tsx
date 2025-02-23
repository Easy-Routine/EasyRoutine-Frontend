import FlexBox from "headful/FlexBox/FlexBox";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import useDeleteSetConfigOneMutation from "hooks/server/useDeleteSetConfigOneMutation";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";

type SetConfigDeleteButtonButtonProps = {
    routineConfigId: string;
    workoutConfigId: string;
};

const SetConfigDeleteButton = ({
    routineConfigId,
    workoutConfigId,
}: SetConfigDeleteButtonButtonProps) => {
    const {mutateAsync: deleteSetConfigOneMutate} =
        useDeleteSetConfigOneMutation();

    const handleSetDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();
        await deleteSetConfigOneMutate({
            routineConfigId: routineConfigId as string,
            workoutConfigId,
        });
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

export default SetConfigDeleteButton;
