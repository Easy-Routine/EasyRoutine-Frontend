import BasicButton from "headful/BasicButton/BasicButton";
import {useRoutineProgress} from "../RoutineProgressProvider";
import CompleteModalContent from "../CompleteModalContent/CompleteModalContent";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import {useModal} from "headless/Modal/Modal";
import UnCompleteModalContent from "../UnCompleteModalContent/UnCompleteModalContent";

const RoutineProgressCompleteButton = () => {
    const {openModal} = useModal();

    const handleButtonClick = () => {
        openModal();
    };

    return <BasicButton onClick={handleButtonClick}>루틴완료</BasicButton>;
};

function withModal<P extends object>(WrappedComponent: React.ComponentType<P>) {
    const WithModal: React.FC<P> = props => {
        const {isAllCompleted} = useRoutineProgress();

        const modalContent = isAllCompleted ? (
            // 모든 세트 완료 시 보여줄 콘텐츠
            <CompleteModalContent />
        ) : (
            // 세트 미완료 시 타이머 콘텐츠
            <UnCompleteModalContent />
        );

        return (
            <ConfirmModal>
                <ConfirmModal.Backdrop />
                <ConfirmModal.Content>{modalContent}</ConfirmModal.Content>
                <WrappedComponent {...props} />
            </ConfirmModal>
        );
    };

    return WithModal;
}

export default withModal(RoutineProgressCompleteButton);
