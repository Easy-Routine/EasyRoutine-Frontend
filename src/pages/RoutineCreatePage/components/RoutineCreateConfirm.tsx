import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Directory from "assets/image/directory.svg";
import {useModal} from "headless/Modal/Modal";
import {RoutineAllGetRes} from "types/routine";
import useRoutineCreateMutation from "hooks/server/useRoutineCreateMutation";
import {useRoutineCreate} from "./RoutineCreateProvider";

type RoutineCreateConfirmProps = {};

const RoutineCreateConfirm = ({}: RoutineCreateConfirmProps) => {
    const {routine} = useRoutineCreate();
    const {closeModal} = useModal();
    const {mutateAsync: createRoutineMutate} = useRoutineCreateMutation();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        await createRoutineMutate(routine);
        closeModal();
    };

    return (
        <ConfirmSet>
            <ConfirmSet.Icon icon={Directory} />
            <ConfirmSet.Title text="루틴 저장" />

            <ConfirmSet.Description
                text={
                    <>
                        작성하신 루틴정보를 저장하시겠습니까?
                        <br />
                        저장 후에도 언제든지 수정하실 수 있습니다.
                    </>
                }
            />
            <ConfirmSet.Cancel
                text="취소"
                onButtonClick={handleCancelButtonClick}
            />
            <ConfirmSet.Confirm
                text="저장하기"
                onButtonClick={handleConfirmButtonClick}
            />
        </ConfirmSet>
    );
};

export default RoutineCreateConfirm;
