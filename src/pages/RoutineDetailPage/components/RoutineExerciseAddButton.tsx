import BasicButton from "headful/BasicButton/BasicButton";
import {useModal} from "headless/Modal/Modal";
import {RoutineExercise, Exercise} from "types/model";
import {v4 as uuid} from "uuid";
import {useRoutineExerciseAdd} from "./RoutineExerciseAddProvider";
import {useRoutineUpdate} from "./RoutineUpdateProvider";
import {useExerciseAllGet} from "./ExerciseAllGetProvider";

type RoutineExerciseAddButtonProps = {};

const RoutineExerciseAddButton = ({}: RoutineExerciseAddButtonProps) => {
    const {exerciseIds, setExerciseIds} = useRoutineExerciseAdd();
    const {exercises} = useExerciseAllGet();

    const {routine, setRoutine} = useRoutineUpdate();
    const {closeModal} = useModal();

    const handleBasicButtonClick = async () => {
        const newRoutine = structuredClone(routine);
        const {routineExercises: currentRoutineExercises} = newRoutine;
        // 운동라이브러리 아이디에서 선택한 운동 라이브러리 아이디를 가져온다.
        const filteredWorkoutLibraries = exercises.filter(exercise =>
            exerciseIds.includes(exercise.id.toString()),
        );
        // 운동라이브러리를 운동 설정타입으로 변환시켜준다.
        const extraRoutineExercises: RoutineExercise[] =
            filteredWorkoutLibraries.map((exercise, index) => ({
                id: uuid(),
                exercise,
                sets: [],
            }));
        newRoutine.routineExercises = [
            ...currentRoutineExercises,
            ...extraRoutineExercises,
        ];

        setRoutine(newRoutine);

        closeModal();
    };

    return (
        <BasicButton
            onClick={handleBasicButtonClick}
            style={{color: "var(--text-white)"}}
        >
            운동 추가하기
        </BasicButton>
    );
};

export default RoutineExerciseAddButton;
