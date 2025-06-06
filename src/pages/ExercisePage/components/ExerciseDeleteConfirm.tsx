import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import React from "react";
import Trash from "assets/image/trash.svg";
import {useModal} from "headless/Modal/Modal";
import useExerciseDeleteMutation from "hooks/server/useExerciseDeleteMutation";
import {useExerciseUpdate} from "./ExerciseUpdateProvider";

const ExerciseDeleteConfirm = () => {
    const {closeModal} = useModal();
    const {mutateAsync: deleteExerciseMutate} = useExerciseDeleteMutation();
    const {id} = useExerciseUpdate();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        await deleteExerciseMutate({id});
        closeModal();
    };

    return (
        <ConfirmSet color="red">
            <ConfirmSet.Icon icon={Trash} />
            <ConfirmSet.Title text="운동 종목 삭제" />

            <ConfirmSet.Description
                text={
                    <>
                        운동 종목을 삭제하면 복구할 수 없습니다.
                        <br /> 해당 종목을 삭제하시겠습니까?
                    </>
                }
            />
            <ConfirmSet.Cancel
                text="취소"
                onButtonClick={handleCancelButtonClick}
            />
            <ConfirmSet.Confirm
                text="확인"
                onButtonClick={handleConfirmButtonClick}
            />
        </ConfirmSet>
    );
};

export default ExerciseDeleteConfirm;
