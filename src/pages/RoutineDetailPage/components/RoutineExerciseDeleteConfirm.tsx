import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Trash from "assets/image/trash.svg";
import {useModal} from "headless/Modal/Modal";
import {useNavigate} from "react-router-dom";
import {RoutineExercise} from "types/model";
import {useRoutineUpdate} from "./RoutineUpdateProvider";

type RoutineExerciseDeleteConfirmProps = {
    routineExercise: RoutineExercise;
};

const RoutineExerciseDeleteConfirm = ({
    routineExercise,
}: RoutineExerciseDeleteConfirmProps) => {
    const {id} = routineExercise;
    const {routine, setRoutine} = useRoutineUpdate();
    const {closeModal} = useModal();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        // 루틴 상태 깊은 복사
        const newRoutine = structuredClone(routine);
        let routineExercises = newRoutine.routineExercises;

        // 해당 ID를 제외
        routineExercises = routineExercises.filter(
            (routineExercise: RoutineExercise) => routineExercise.id !== id,
        );

        // order 재정렬
        routineExercises = routineExercises
            .sort((a: RoutineExercise, b: RoutineExercise) => a.order - b.order)
            .map((exercise: RoutineExercise, index: number) => ({
                ...exercise,
                order: index + 1,
            }));

        // 새로운 배열로 루틴 업데이트
        newRoutine.routineExercises = routineExercises;
        setRoutine(newRoutine);
        closeModal();
    };

    return (
        <ConfirmSet color="red">
            <ConfirmSet.Icon icon={Trash} />
            <ConfirmSet.Title text="운동 종목 삭제" />

            <ConfirmSet.Description
                text={
                    <>
                        입력한 세트 정보가 모두 삭제됩니다.
                        <br />
                        해당 운동 종목을 삭제하시겠습니까?
                    </>
                }
            />
            <ConfirmSet.Cancel
                text="취소"
                onButtonClick={handleCancelButtonClick}
            />
            <ConfirmSet.Confirm
                text="삭제"
                onButtonClick={handleConfirmButtonClick}
            />
        </ConfirmSet>
    );
};

export default RoutineExerciseDeleteConfirm;
