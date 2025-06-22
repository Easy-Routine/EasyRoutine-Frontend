import Portal from "headless/Portal/Portal";
import DialogModal from "headful/DialogModal/DialogModal";
import {RoutineAllGetRes} from "types/routine";

type RoutineExerciseDeleteModalProps = {
    children: [React.ReactNode, React.ReactNode];
};

/*
    루틴 설정을 삭제하는 모달을 여는 버튼 
*/

const RoutineExerciseDeleteModal = ({
    children,
}: RoutineExerciseDeleteModalProps) => {
    const [trigger, content] = children;

    return (
        <DialogModal>
            <div onClick={e => e.stopPropagation()}>
                {trigger}
                <Portal>
                    <DialogModal.Backdrop />
                    <DialogModal.Content>{content}</DialogModal.Content>
                </Portal>
            </div>
        </DialogModal>
    );
};

export default RoutineExerciseDeleteModal;
