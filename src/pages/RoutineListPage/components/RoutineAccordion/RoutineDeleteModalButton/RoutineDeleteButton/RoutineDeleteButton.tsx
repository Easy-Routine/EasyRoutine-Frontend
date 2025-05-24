import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import useDeleteRoutineOneMutation from "hooks/server/useDeleteRoutineOneMutation";
import {Routine} from "types/model";

type RoutineDeleteButtonProps = {
    routine: Routine;
};

const RoutineDeleteButton = ({routine}: RoutineDeleteButtonProps) => {
    const {id} = routine;

    const {mutateAsync: deleteRoutineOne} = useDeleteRoutineOneMutation();

    const handleRoutineDeleteModalButtonButtonClick = async () => {
        await deleteRoutineOne(id);
    };

    return (
        <ConfirmModalClose.Confirm
            onConfirmButtonClick={handleRoutineDeleteModalButtonButtonClick}
        >
            확인
        </ConfirmModalClose.Confirm>
    );
};

export default RoutineDeleteButton;
