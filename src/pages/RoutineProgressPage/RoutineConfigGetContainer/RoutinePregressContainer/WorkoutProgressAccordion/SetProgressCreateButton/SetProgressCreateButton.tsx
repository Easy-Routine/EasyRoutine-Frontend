import FlexBox from "headful/FlexBox/FlexBox";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import useCreateSetConfigOneMutation from "hooks/server/useCreateSetConfigOneMutation";
import {ReactComponent as PlusIcon} from "assets/image/plus2.svg";
import {SetConfig} from "types/model";
import {v4 as uuidv4} from "uuid";
import moment from "moment";

type SetProgressCreateButtonButtonProps = {
    setConfigs: SetConfig[];
    onSetProgressCreateButtonClick: (setConfigs: SetConfig[]) => void;
};

const SetProgressCreateButton = ({
    setConfigs,
    onSetProgressCreateButtonClick,
}: SetProgressCreateButtonButtonProps) => {
    const {mutateAsync: createSetConfigOneMutate} =
        useCreateSetConfigOneMutation();

    const handleSetProgressCreateButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();
        const newSetConfigs = structuredClone(setConfigs);
        const lastSetConfigIndex = newSetConfigs.length - 1;

        // 세트 설정 배열에 새로운 세트 설정을 추가한다.
        newSetConfigs.push({
            _id: uuidv4(),
            weight: newSetConfigs[lastSetConfigIndex]?.weight || 0,
            rep: newSetConfigs[lastSetConfigIndex]?.rep || 0,
            restSec: newSetConfigs[lastSetConfigIndex]?.restSec || 0,
            workoutSec: newSetConfigs[lastSetConfigIndex]?.restSec || 0,
            createdAt: moment().toISOString(),
            updatedAt: moment().toISOString(),
            workoutConfigId: "1",
        });

        onSetProgressCreateButtonClick(newSetConfigs);

        // 완료된 세트보다 하나 더 많은 인덱스를 현재 세트로 지정한다.
        // setCurrentSetId(newSetConfigs[completedSetIds.length]._id);
    };

    return (
        <FlexBox
            gap={16}
            alignItems="center"
            onClick={handleSetProgressCreateButtonClick}
        >
            <PlusIcon color={"var(--color-primary)"} />
            <Text color={"var(--color-primary)"}>세트 추가하기</Text>
        </FlexBox>
    );
};

export default SetProgressCreateButton;
