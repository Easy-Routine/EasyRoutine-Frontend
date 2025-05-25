import BasicTable from "headful/BasicTable/BasicTable";
import {Set, RoutineExercise} from "types/model";
import {useRoutineCreate} from "../../RoutineCreateProvider/RoutineCreateProvider";

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
    const {routine, setRoutine} = useRoutineCreate();

    const handleSetInputChange = async (
        setId: string,
        key: keyof Set,
        value: string,
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
                                    value={set[type as keyof Set]}
                                    onChange={e =>
                                        handleSetInputChange(
                                            set.id,
                                            type as keyof Set,
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
