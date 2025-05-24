import BasicTable from "headful/BasicTable/BasicTable";
import {Set, RoutineExercise} from "types/model";
import {useRoutineUpdateParams} from "../../RoutineUpdateParamsProvider/RoutineUpdateParamsProvider";

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
    // const {routineId} = useParams();
    const {exercise, id, sets} = routineExercise;
    const {type} = exercise;
    const {routine, setRoutine} = useRoutineUpdateParams();

    const handleSetInputChange = async (
        setId: string,
        key: string,
        value: string,
    ) => {
        // 루틴 설정 상태를 가져와서 깊은 복사를 해준다.
        const newRoutine = structuredClone(routine);
        // 운동 설정 상태의 아이디를 이용하여 해당 운동을 찾는다.
        const routineExercises = newRoutine.routineExercises;
        const foundRoutineExercise = routineExercises.find(
            routineExercise => routineExercise.id === id,
        ) as RoutineExercise;
        // 세트 설정 상태의 아이디를 이용하여 해당 세트를 찾는다.
        const sets = foundRoutineExercise.sets;
        const foundSet = sets.find(set => set.id === setId) as Set;
        // 찾은 세트 설정의 값을 변경해준다.
        foundSet[key] = value;
        // 새로운 루틴 상태로 업데이트 시켜준다.
        setRoutine(newRoutine);
    };

    return (
        <BasicTable>
            <BasicTable.Header>
                <BasicTable.Cell>세트</BasicTable.Cell>
                {type.map(type => (
                    <BasicTable.Cell key={type}>
                        {typeMapper[type]}
                    </BasicTable.Cell>
                ))}
                <BasicTable.Cell>휴식</BasicTable.Cell>
            </BasicTable.Header>
            <BasicTable.Body>
                {sets.map((set, index) => (
                    <BasicTable.Row>
                        <BasicTable.Cell>{index + 1}</BasicTable.Cell>
                        {type.map(type => (
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
                            <BasicTable.Input value={set.restSec} />
                        </BasicTable.Cell>
                    </BasicTable.Row>
                ))}
            </BasicTable.Body>
        </BasicTable>
    );
};

export default SetUpdateTable;
