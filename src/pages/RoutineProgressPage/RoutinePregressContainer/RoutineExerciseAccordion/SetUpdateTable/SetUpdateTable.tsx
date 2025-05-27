import BasicTable from "headful/BasicTable/BasicTable";

import {RoutineExercise, Set} from "types/model";
import {useRoutineProgress} from "../../RoutineProgressProvider";

type SetUpdateTableProps = {
    routineExercise: RoutineExercise;
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
    const {routineHistory} = useRoutineProgress();

    const currentRE = routineExercise;
    const currentRHE = routineHistory.routineExercises.find(
        (re: RoutineExercise) => re.id === currentRE.id,
    );

    // 당연하게도 운동완료 버튼을 누르기 전까지는 루틴기록의 운동데이터는 존재하지 않는다.

    const types = exercise.type as Array<keyof Set>;

    //TODO: useRoutineProgress 다시 정의하기
    const {
        routine,
        // sets,

        setRoutine,
    } = useRoutineProgress(); // useRoutineProgress

    // setId: string,
    //     key: K,
    //     value: Set[K],

    const handleSetInputChange = async <K extends keyof Set>(
        setId: string,
        key: K,
        value: Set[K],
    ) => {
        const newRoutine = structuredClone(routine);
        const foundRoutineExercise = newRoutine.routineExercises.find(
            (routineExercise: RoutineExercise) => routineExercise.id === id,
        ) as RoutineExercise;

        const foundSet = foundRoutineExercise.sets.find(
            set => set.id === setId,
        ) as Set;

        if (key === "id") {
            foundSet[key] = value as any; // or keep it string if needed
        } else {
            foundSet[key] = Number(value) as any;
        }

        setRoutine(newRoutine);
    };

    // 운동 기록의 세트배열에서 해당 세트 id가 있는지 확인
    const isCompletedSet = (setId: string) =>
        currentRHE ? currentRHE.sets.map(s => s.id).includes(setId) : false;
    const isCurrentSet = (index: number) =>
        currentRHE ? index === currentRHE.sets.length : index === 0;

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
                        isGrayLine={isCompletedSet(set.id)}
                        isPrimaryLine={isCurrentSet(index)}
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
