import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import ExClmation from "assets/image/exclamation.svg";
import {useModal} from "headless/Modal/Modal";
import {useRoutineProgress} from "./RoutineProgressProvider";
import useRoutineHistoryCreateMutation from "hooks/server/useRoutineHistoryCreateMutation";
import {useNavigate, useParams} from "react-router-dom";
import ROUTES from "constants/routes";

const UnCompleteModalContent = () => {
    const {closeModal} = useModal();
    const navigate = useNavigate();
    const {routineHistory} = useRoutineProgress();
    const {routineId} = useParams();
    const {mutateAsync: routineHistoryCreateMutate} =
        useRoutineHistoryCreateMutation();

    const handleCancelButtonClick = () => {
        closeModal();
    };
    const handleConfirmButtonClick = async () => {
        // Navigate to the record page or perform any other action
        closeModal();
        await routineHistoryCreateMutate({
            ...routineHistory,
            routineId: Number(routineId),
        });
        navigate(ROUTES.RECORD.CALENDAR.PATH);
    };

    return (
        <ConfirmSet>
            <ConfirmSet.Icon icon={ExClmation} />
            <ConfirmSet.Title text="루틴 미완료" />

            <ConfirmSet.Description
                text={
                    <>
                        이 페이지를 벗어나면 지금까지 진행한 운동만
                        <br />
                        캘린더에 저장됩니다. 운동을 종료하시겠습니까?
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

export default UnCompleteModalContent;
