import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import React from "react";
import Trash from "assets/image/trash.svg";
import {useModal} from "headless/Modal/Modal";
import useExerciseDeleteMutation from "hooks/server/useExerciseDeleteMutation";
import {RoutineAllGetRes} from "types/routine";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";
import {RoutineHistory} from "types/model";

type RoutineHistoryDeleteConfirmProps = {
    routineHistory: RoutineHistory;
};

const RoutineHistoryDeleteConfirm = ({
    routineHistory,
}: RoutineHistoryDeleteConfirmProps) => {
    const {id, name} = routineHistory;
    const {closeModal} = useModal();
    const navigate = useNavigate();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        // navigate(ROUTES.PROGRESS.PATH(id));
        closeModal();
    };

    return (
        <ConfirmSet color="#FF0000">
            <ConfirmSet.Icon icon={Trash} />
            <ConfirmSet.Title text="기록 삭제" />

            <ConfirmSet.Description
                text={
                    <>
                        운동 기록을 삭제하면 복구 할 수 없습니다.
                        <br />
                        해당 기록을 삭제하시겠습니까?
                    </>
                }
            />
            <ConfirmSet.Cancel
                text="취소"
                onButtonClick={handleCancelButtonClick}
            />
            <ConfirmSet.Confirm
                text="삭제하기"
                onButtonClick={handleConfirmButtonClick}
            />
        </ConfirmSet>
    );
};

export default RoutineHistoryDeleteConfirm;
