import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Trash from "assets/image/trash.svg";
import {useModal} from "headless/Modal/Modal";
import {RoutineAllGetRes} from "types/routine";
import useRoutineDeleteMutation from "hooks/server/useRoutineDeleteMutation";

type RoutineDeleteConfirmProps = {
    routineAllGetRes: RoutineAllGetRes[number];
};

const RoutineDeleteConfirm = ({
    routineAllGetRes,
}: RoutineDeleteConfirmProps) => {
    const {id, name} = routineAllGetRes;
    const {closeModal} = useModal();
    const {mutateAsync: routineDeleteMutate} = useRoutineDeleteMutation();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        await routineDeleteMutate({id});
        closeModal();
    };

    return (
        <ConfirmSet color="red">
            <ConfirmSet.Icon icon={Trash} />
            <ConfirmSet.Title text="루틴 삭제" />

            <ConfirmSet.Description
                text={<>'{name}' 루틴을 삭제하시겠습니까?</>}
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

export default RoutineDeleteConfirm;
