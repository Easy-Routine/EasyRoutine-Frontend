import BasicButton from "headful/BasicButton/BasicButton";
import useCreateSetRecordOneMutation from "hooks/server/useCreateSetRecordOneMutation";
import React from "react";
import {SetConfig} from "types/model";

type SetProgressCompleteButtonProps = {
    routineRecordId: string;
    workoutRecordId: string;
    setConfigs: SetConfig[];
    onSetProgressCompleteButtonClick: (setConfigs: SetConfig[]) => SetConfig;
};

const SetProgressCompleteButton = ({
    routineRecordId,
    workoutRecordId,
    setConfigs,
    onSetProgressCompleteButtonClick,
}: SetProgressCompleteButtonProps) => {
    const {mutateAsync: createSetRecordMutate} =
        useCreateSetRecordOneMutation();

    const handleSetProgressCompleteButtonClick = async () => {
        const newSetConfigs = structuredClone(setConfigs);

        const currentSetConfig =
            onSetProgressCompleteButtonClick(newSetConfigs);

        await createSetRecordMutate({
            routineRecordId,
            workoutRecordId,
            setConfig: currentSetConfig,
        });
    };

    return (
        <BasicButton onClick={handleSetProgressCompleteButtonClick}>
            세트 완료
        </BasicButton>
    );
};

export default SetProgressCompleteButton;
