import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Directory from "assets/image/directory.svg";
import Warning from "assets/image/warning.svg";
import {useModal} from "headless/Modal/Modal";
import {RoutineAllGetRes} from "types/routine";
import useRoutineUpdateMutation from "hooks/server/useRoutineUpdateMutation";
import {useRoutineUpdate} from "./RoutineUpdateProvider";

type RoutineUpdateConfirmProps = {};

const RoutineUpdateConfirm = ({}: RoutineUpdateConfirmProps) => {
    const {routine} = useRoutineUpdate();

    const hasTitle = routine.name;
    const hasExercises = routine.routineExercises.length > 0;

    return (
        <>
            {hasTitle && hasExercises ? (
                <RoutineUpdateSuccessConfirm />
            ) : (
                <RoutineUpdateWarningConfirm />
            )}
        </>
    );
};

export default RoutineUpdateConfirm;

const RoutineUpdateSuccessConfirm = () => {
    const {routine} = useRoutineUpdate();
    const {closeModal} = useModal();
    const {mutateAsync: UpdateRoutineMutate} = useRoutineUpdateMutation();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        await UpdateRoutineMutate(routine);
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

const RoutineUpdateWarningConfirm = () => {
    const {closeModal} = useModal();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        closeModal();
    };

    return (
        <ConfirmSet>
            <ConfirmSet.Icon icon={Warning} />
            <ConfirmSet.Title text="루틴 정보 미입력" />

            <ConfirmSet.Description
                text={
                    <>
                        일부 항목이 입력되지 않았습니다.
                        <br />
                        필수 정보를 다시 한 번 확인해 주세요.
                    </>
                }
            />
            <></>
            <ConfirmSet.Confirm
                text="확인"
                onButtonClick={handleConfirmButtonClick}
                single
            />
        </ConfirmSet>
    );
};
