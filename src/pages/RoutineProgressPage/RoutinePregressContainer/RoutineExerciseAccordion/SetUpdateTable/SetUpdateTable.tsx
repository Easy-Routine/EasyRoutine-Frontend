import BasicTable from "headful/BasicTable/BasicTable";

import {RoutineExercise, Set} from "types/model";
import {useRoutineProgress} from "../../RoutineProgressProvider";

type SetUpdateTableProps = {
    routineExercise: RoutineExercise;
    // exerciseType: string[];
    // sets: Set[];
    // currentSetId: string;
    // completedSetIds: string[];
    // onSetUpdateTableChange: (sets: Set[]) => void;
};

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const SetUpdateTable = ({routineExercise}: SetUpdateTableProps) => {
    const {exercise, id, sets} = routineExercise;

    const types = exercise.type as Array<keyof Set>;

    //TODO: useRoutineProgress 다시 정의하기
    const {
        routineProgress,
        // sets,
        currentWorkoutId,
        currentSetId,
        completedSetIds,
        currentRoutineExercise,
        setRoutineProgress,
    } = useRoutineProgress(); // useRoutineProgress

    const handleSetInputChange = async <K extends keyof Set>(
        setId: string,
        key: K,
        value: Set[K],
    ) => {
        // const newRoutineProgress = structuredClone(routineProgress);
        // const currentRoutineExercise = newRoutineProgress.routineExercises.find(
        //     (routineExercise: RoutineExercise) =>
        //         routineExercise.id === currentWorkoutId,
        // ) as RoutineExercise;
        // const currentSet = currentRoutineExercise.sets.find(
        //     (set: Set) => set.id === setId,
        // ) as Set;
        // currentSet[key] = value;
        // // console.log("routineProgress", newRoutineProgress);
        // setRoutineProgress(newRoutineProgress);
    };

    const isCurrentSet = (setId: string) => {
        return setId === currentSetId;
    };

    const isCompletedSet = (setId: string) => completedSetIds.includes(setId);

    // console.log(completedSetIds, "completedSetIds");

    return (
        <BasicTable>
            <BasicTable.Header>
                <BasicTable.Cell>세트</BasicTable.Cell>
                {types.map(type => (
                    <BasicTable.Cell key={type}>
                        {typeMapper[type]}
                    </BasicTable.Cell>
                ))}
                <BasicTable.Cell>휴식</BasicTable.Cell>
            </BasicTable.Header>
            <BasicTable.Body>
                {sets.map((set, index) => (
                    <BasicTable.Row
                        isGrayLine={isCurrentSet(set.id)}
                        isPrimaryLine={isCompletedSet(set.id)}
                    >
                        <BasicTable.Cell>{index + 1}</BasicTable.Cell>
                        {types.map(type => (
                            <BasicTable.Cell key={type}>
                                <BasicTable.Input
                                    value={set[type]}
                                    onChange={e =>
                                        handleSetInputChange(
                                            set.id,
                                            type,
                                            e.target.value,
                                        )
                                    }
                                />
                            </BasicTable.Cell>
                        ))}
                        <BasicTable.Cell>
                            <BasicTable.Input
                                value={set.restSec}
                                onChange={e =>
                                    handleSetInputChange(
                                        set.id,
                                        "restSec",
                                        e.target
                                            .value as unknown as Set["restSec"],
                                    )
                                }
                            />
                        </BasicTable.Cell>
                    </BasicTable.Row>
                ))}
            </BasicTable.Body>
        </BasicTable>
    );
};

export default SetUpdateTable;
