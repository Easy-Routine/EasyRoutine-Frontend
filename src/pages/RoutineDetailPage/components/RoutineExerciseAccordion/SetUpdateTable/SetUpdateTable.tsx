// src/components/SetUpdateTable/SetUpdateTable.tsx
import React from "react";
import BasicTable from "headful/BasicTable/BasicTable";
import {Set, RoutineExercise} from "types/model";
import {useRoutineUpdateParams} from "../../RoutineUpdateParamsProvider/RoutineUpdateParamsProvider";

type SetUpdateTableProps = {
    routineExercise: RoutineExercise;
};

type TypeMapper = {
    [key in keyof Set]?: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const SetUpdateTable: React.FC<SetUpdateTableProps> = ({routineExercise}) => {
    const {exercise, sets} = routineExercise;
    // exercise.types 은 서버에서 내려오는 string[] 이지만,
    // 실제로는 Set의 키 중 일부라고 가정
    const types = exercise.types as Array<keyof Set>;

    const {routine, setRoutine} = useRoutineUpdateParams();

    const handleSetInputChange = async <K extends keyof Set>(
        setId: string,
        key: K,
        value: Set[K],
    ) => {
        // 1) 기존 루틴 상태를 깊은 복사
        const newRoutine = structuredClone(routine);

        // 2) 복사한 루틴에서 routineExercises 배열 가져오기
        const routineExercises = newRoutine.routineExercises;

        // 3) 해당 운동 항목 찾기
        const foundRoutineExercise = routineExercises.find(
            (routineExercise: RoutineExercise) =>
                routineExercise.id === routineExercise.id,
        );
        if (!foundRoutineExercise) {
            console.warn(
                `RoutineExercise with id=${routineExercise.id} not found.`,
            );
            return;
        }

        // 4) 해당 세트 찾기
        const targetSets = foundRoutineExercise.sets;
        const foundSet = targetSets.find((s: Set) => s.id === setId) as Set;
        if (!foundSet) {
            console.warn(`Set with id=${setId} not found.`);
            return;
        }

        // 5) 숫자로 변환이 필요한 경우 처리
        if (
            key === "weight" ||
            key === "rep" ||
            key === "workoutSec" ||
            key === "restSec"
        ) {
            foundSet[key] = Number(value) as Set[K];
        } else {
            foundSet[key] = value;
        }

        // 6) 상태 업데이트
        setRoutine(newRoutine);
    };

    return (
        <BasicTable>
            <BasicTable.Header>
                <BasicTable.Cell>세트</BasicTable.Cell>
                {types.map(type => (
                    <BasicTable.Cell key={type}>
                        {typeMapper[type] || type}
                    </BasicTable.Cell>
                ))}
                <BasicTable.Cell>휴식</BasicTable.Cell>
            </BasicTable.Header>

            <BasicTable.Body>
                {sets.map((set, index) => (
                    <BasicTable.Row key={set.id}>
                        <BasicTable.Cell>{index + 1}</BasicTable.Cell>

                        {types.map(type => (
                            <BasicTable.Cell key={type}>
                                <BasicTable.Input
                                    // field가 Set의 키이므로 안전하게 인덱싱
                                    value={set[type] ?? ""}
                                    onChange={e =>
                                        handleSetInputChange(
                                            set.id,
                                            type,
                                            e.target.value as Set[typeof type],
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
