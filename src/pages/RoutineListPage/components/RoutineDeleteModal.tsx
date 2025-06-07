import Portal from "headless/Portal/Portal";
import DialogModal from "headful/DialogModal/DialogModal";
import {RoutineAllGetRes} from "types/routine";

type RoutineDeleteModalProps = {
    children: [React.ReactNode, React.ReactNode];
};

/*
    루틴 설정을 삭제하는 모달을 여는 버튼 
*/

const RoutineDeleteModal = ({children}: RoutineDeleteModalProps) => {
    const [trigger, content] = children;

    return (
        <DialogModal>
            <div onClick={e => e.stopPropagation()}>
                <DialogModal.Trigger>
                    {trigger}
                    {/* <SwipeableAccordion.DeleteButton /> */}
                </DialogModal.Trigger>
                <Portal>
                    <DialogModal.Backdrop />
                    <DialogModal.Content>{content}</DialogModal.Content>
                </Portal>
            </div>
        </DialogModal>
    );
};

export default RoutineDeleteModal;
