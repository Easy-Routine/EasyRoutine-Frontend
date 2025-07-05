import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Check from "assets/image/check.svg";
import {useModal} from "headless/Modal/Modal";
import {useRoutineProgress} from "./RoutineProgressProvider";
import useRoutineHistoryCreateMutation from "hooks/server/useRoutineHistoryCreateMutation";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";

const CompleteModalContent = () => {
    const {closeModal} = useModal();
    const {routineHistory} = useRoutineProgress();
    const {mutateAsync: routineHistoryCreateMutate} =
        useRoutineHistoryCreateMutation();
    const navigate = useNavigate();

    const handleCancelButtonClick = () => {
        closeModal();
    };
    const handleConfirmButtonClick = async () => {
        // Navigate to the record page or perform any other action
        closeModal();

        await routineHistoryCreateMutate(routineHistory);
        navigate(ROUTES.RECORD.CALENDAR.PATH);
    };

    return (
        <ConfirmSet>
            <ConfirmSet.Icon icon={Check} />
            <ConfirmSet.Title text="루틴 완료" />

            <ConfirmSet.Description
                text={
                    <>
                        설정한 루틴이 모두 완료되었습니다.
                        <br /> 운동 기록을 확인하려면 기록 페이지로 이동해
                        주세요.
                        <br /> 남아서 운동을 계속하려면 '운동 계속하기'를
                        눌러주세요.
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

export default CompleteModalContent;
