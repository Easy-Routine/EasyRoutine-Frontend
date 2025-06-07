import BasicTable from "headful/BasicTable/BasicTable";
import {Set, RoutineExercise} from "types/model";
import {useRoutineCreate} from "./RoutineCreateProvider";
import {Type} from "types/enum";

type SetUpdateTableProps = {
    routineExercise: RoutineExercise;
};

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    [Type.WEIGHT]: "무게",
    [Type.COUNT]: "횟수",
    [Type.TIME]: "시간",
};

const typeKeyMapper: TypeMapper = {
    [Type.WEIGHT]: "weight",
    [Type.COUNT]: "rep",
    [Type.TIME]: "exerciseSec",
};

const SetUpdateTable = ({routineExercise}: SetUpdateTableProps) => {
    // const {routineId} = useParams();
    const {exercise, id, sets} = routineExercise;
    const {types} = exercise;
    const {routine, setRoutine} = useRoutineCreate();

    const handleSetInputChange = async <K extends keyof Set>(
        setId: string | number,
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
                    <BasicTable.Row>
                        <BasicTable.Cell>{index + 1}</BasicTable.Cell>
                        {types.map(type => (
                            <BasicTable.Cell key={typeKeyMapper[type]}>
                                <BasicTable.Input
                                    value={
                                        set[typeKeyMapper[type] as keyof Set]
                                    }
                                    onChange={e =>
                                        handleSetInputChange(
                                            set.id,
                                            typeKeyMapper[type] as keyof Set,
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
