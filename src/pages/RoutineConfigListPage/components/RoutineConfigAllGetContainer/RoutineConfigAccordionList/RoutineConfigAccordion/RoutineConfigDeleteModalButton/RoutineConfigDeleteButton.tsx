import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import useDeleteRoutineConfigOneMutation from "hooks/server/useDeleteRoutineConfigOneMutation";

type RoutineConfigDeleteButtonProps = {
    routineConfigId: string;
};

const RoutineConfigDeleteButton = ({
    routineConfigId,
}: RoutineConfigDeleteButtonProps) => {
    const {mutateAsync: deleteRoutineConfigOne} =
        useDeleteRoutineConfigOneMutation();

    const handleRoutineConfigDeleteModalButtonButtonClick = async () => {
        await deleteRoutineConfigOne(routineConfigId);
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
