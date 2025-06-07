// src/components/SetUpdateTable/SetUpdateTable.tsx
import React from "react";
import BasicTable from "headful/BasicTable/BasicTable";
import {Set, RoutineExercise} from "types/model";
import {useRoutineUpdate} from "./RoutineUpdateProvider";
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

const SetUpdateTable: React.FC<SetUpdateTableProps> = ({routineExercise}) => {
    const {exercise, sets} = routineExercise;
    // exercise.types 은 서버에서 내려오는 string[] 이지만,
    // 실제로는 Set의 키 중 일부라고 가정
    const types = exercise.types as Array<keyof Set>;

    const {routine, setRoutine} = useRoutineUpdate();

    const handleSetInputChange = async <K extends keyof Set>(
        setId: string | number,
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
            key === "exerciseSec" ||
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
                            <BasicTable.Cell key={typeKeyMapper[type]}>
                                <BasicTable.Input
                                    // field가 Set의 키이므로 안전하게 인덱싱
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
