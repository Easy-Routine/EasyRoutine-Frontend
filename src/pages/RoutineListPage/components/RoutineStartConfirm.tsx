import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import React from "react";
import Trash from "assets/image/trash.svg";
import {useModal} from "headless/Modal/Modal";
import useExerciseDeleteMutation from "hooks/server/useExerciseDeleteMutation";
import {RoutineAllGetRes} from "types/routine";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";

type RoutineStartConfirmProps = {
    routineAllGetRes: RoutineAllGetRes[number];
};

const RoutineStartConfirm = ({routineAllGetRes}: RoutineStartConfirmProps) => {
    const {id, name} = routineAllGetRes;
    const {closeModal} = useModal();
    const navigate = useNavigate();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        navigate(ROUTES.PROGRESS.PATH(id));
        closeModal();
    };

    return (
        <ConfirmSet>
            <ConfirmSet.Icon icon={Trash} />
            <ConfirmSet.Title text="루틴 진행" />

            <ConfirmSet.Description
                text={
                    <>
                        '{name}' 루틴으로
                        <br />
                        운동을 시작하시겠습니까?
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

export default RoutineStartConfirm;
