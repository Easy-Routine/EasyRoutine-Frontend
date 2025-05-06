import BasicButton from "headful/BasicButton/BasicButton";
import {useWorkoutConfigAddParams} from "../WorkoutConfigAddParamsProvider";
import {useModal} from "headless/Modal/Modal";
import {WorkoutConfig, WorkoutLibrary} from "types/model";
import {v4 as uuid} from "uuid";
import {useWorkoutLibraryAll} from "../../WorkoutLibraryAllProvider/WorkoutLibraryAllProvider";
import {useRoutineConfigCreate} from "../../RoutineConfigCreateProvider/RoutineConfigCreateProvider";

type WorkoutConfigAddButtonProps = {};

const WorkoutConfigAddButton = ({}: WorkoutConfigAddButtonProps) => {
    const {workoutLibraryIds, setWorkoutLibraryIds} =
        useWorkoutConfigAddParams();
    const {workoutLibraries} = useWorkoutLibraryAll();

    const {routineConfig, setRoutineConfig} = useRoutineConfigCreate();
    const {closeModal} = useModal();

    const handleBasicButtonClick = async () => {
        const newRoutineConfig = structuredClone(routineConfig);
        const {workoutConfigs: currentWorkoutConfigs} = newRoutineConfig;
        // 운동라이브러리 아이디에서 선택한 운동 라이브러리 아이디를 가져온다.
        const filteredWorkoutLibraries = workoutLibraries.filter(
            workoutLibrary => workoutLibraryIds.includes(workoutLibrary._id),
        );
        // 운동라이브러리를 운동 설정타입으로 변환시켜준다.
        const extraWorkoutConfigs: WorkoutConfig[] =
            filteredWorkoutLibraries.map((workoutLibrary, index) => ({
                _id: uuid(),
                workoutLibrary,
                setConfigs: [],
            }));
        newRoutineConfig.workoutConfigs = [
            ...currentWorkoutConfigs,
            ...extraWorkoutConfigs,
        ];

        setRoutineConfig(newRoutineConfig);

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

export default WorkoutConfigAddButton;
