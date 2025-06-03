import BasicButton from "headful/BasicButton/BasicButton";
import {useRoutineExerciseAddParams} from "../RoutineExerciseAddParamsProvider";
import {useModal} from "headless/Modal/Modal";
import {useRoutineUpdateParams} from "../../RoutineUpdateParamsProvider/RoutineUpdateParamsProvider";
import {RoutineExercise, Exercise} from "types/model";
import {v4 as uuid} from "uuid";
import {useExerciseAll} from "../../ExerciseAllProvider/ExerciseAllProvider";

type RoutineExerciseAddButtonProps = {};

const RoutineExerciseAddButton = ({}: RoutineExerciseAddButtonProps) => {
    const {exerciseIds, setExerciseIds} = useRoutineExerciseAddParams();
    const {workoutLibraries} = useExerciseAll();

    const {routine, setRoutine} = useRoutineUpdateParams();
    const {closeModal} = useModal();

    const handleBasicButtonClick = async () => {
        const newRoutine = structuredClone(routine);
        const {routineExercises: currentRoutineExercises} = newRoutine;
        // 운동라이브러리 아이디에서 선택한 운동 라이브러리 아이디를 가져온다.
        const filteredWorkoutLibraries = workoutLibraries.filter(exercise =>
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
