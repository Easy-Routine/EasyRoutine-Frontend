import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import useDeleteRoutineConfigOneMutation from "hooks/server/useDeleteRoutineConfigOneMutation";
import {RoutineConfig} from "types/model";

type RoutineConfigDeleteButtonProps = {
    routineConfig: RoutineConfig;
};

const RoutineConfigDeleteButton = ({
    routineConfig,
}: RoutineConfigDeleteButtonProps) => {
    const {_id} = routineConfig;

    const {mutateAsync: deleteRoutineConfigOne} =
        useDeleteRoutineConfigOneMutation();

    const handleRoutineConfigDeleteModalButtonButtonClick = async () => {
        await deleteRoutineConfigOne(_id);
    };

    return (
        <ConfirmModalClose.Confirm
            onConfirmButtonClick={
                handleRoutineConfigDeleteModalButtonButtonClick
            }
        >
            확인
        </ConfirmModalClose.Confirm>
    );
};

export default RoutineConfigDeleteButton;
