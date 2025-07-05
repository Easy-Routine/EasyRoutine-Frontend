import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import ExClmation from "assets/image/exclamation.svg";
import {useModal} from "headless/Modal/Modal";
import {useRoutineProgress} from "./RoutineProgressProvider";

const UnCompleteModalContent = () => {
    const {closeModal} = useModal();
    const {routineHistory} = useRoutineProgress();

    const handleCancelButtonClick = () => {
        closeModal();
    };
    const handleConfirmButtonClick = () => {
        // Navigate to the record page or perform any other action
        closeModal();
        console.log("루틴 기록:", routineHistory);
        window.alert(routineHistory);
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
