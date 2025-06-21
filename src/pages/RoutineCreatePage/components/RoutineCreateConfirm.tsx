import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Directory from "assets/image/directory.svg";
import Warning from "assets/image/warning.svg";
import {useModal} from "headless/Modal/Modal";
import {RoutineAllGetRes} from "types/routine";
import useRoutineCreateMutation from "hooks/server/useRoutineCreateMutation";
import {useRoutineCreate} from "./RoutineCreateProvider";

type RoutineCreateConfirmProps = {};

const RoutineCreateConfirm = ({}: RoutineCreateConfirmProps) => {
    const {routine} = useRoutineCreate();

    const hasTitle = routine.name;
    const hasExercises = routine.routineExercises.length > 0;

    return (
        <>
            {hasTitle && hasExercises ? (
                <RoutineCreateSuccessConfirm />
            ) : (
                <RoutineCreateWarningConfirm />
            )}
        </>
    );
};

export default RoutineCreateConfirm;

const RoutineCreateSuccessConfirm = () => {
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

const RoutineCreateWarningConfirm = () => {
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
