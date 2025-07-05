import BasicInput from "headful/BasicInput/BasicInput";
import {useRoutineHistoryChartGet} from "./RoutineHistoryChartGetProvider";
import {useExerciseAllGet} from "./ExerciseAllGetProvider";

const ExerciseNameInput = () => {
    const {exerciseId} = useRoutineHistoryChartGet();
    const {exercises} = useExerciseAllGet();

    const foundExercise = exercises.find(
        exercise => exercise.id === exerciseId,
    );

    return (
        <BasicInput
            value={foundExercise?.name}
            placeholder="운동을 선택해주세요."
            disabled
        />
    );
};

export default ExerciseNameInput;
