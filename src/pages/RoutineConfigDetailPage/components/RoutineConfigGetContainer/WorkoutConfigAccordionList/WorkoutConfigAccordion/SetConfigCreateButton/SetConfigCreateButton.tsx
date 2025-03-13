import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import useCreateSetConfigOneMutation from "hooks/server/useCreateSetConfigOneMutation";
import {ReactComponent as PlusIcon} from "assets/image/plus2.svg";

type SetConfigCreateButtonButtonProps = {
    routineConfigId: string;
    workoutConfigId: string;
};

const SetConfigCreateButton = ({
    routineConfigId,
    workoutConfigId,
}: SetConfigCreateButtonButtonProps) => {
    const {mutateAsync: createSetConfigOneMutate} =
        useCreateSetConfigOneMutation();

    const handleSetCreateButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();
        await createSetConfigOneMutate({
            routineConfigId,
            workoutConfigId,
        });
    };

    return (
        <FlexBox
            gap={16}
            alignItems="center"
            onClick={handleSetCreateButtonClick}
        >
            <PlusIcon color={"var(--color-primary)"} />
            <Text color={"var(--color-primary)"}>세트 추가하기</Text>
        </FlexBox>
    );
};

export default SetConfigCreateButton;
