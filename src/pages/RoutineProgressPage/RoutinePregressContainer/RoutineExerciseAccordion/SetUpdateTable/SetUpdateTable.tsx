import BasicTable from "headful/BasicTable/BasicTable";
import useUpdateSetFieldMutation from "hooks/server/useUpdateSetFiledMutation";
import React from "react";
import {useParams} from "react-router-dom";
import {Set, RoutineExercise} from "types/model";
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
    const {type} = exercise;

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

    const exerciseType = currentRoutineExercise?.exercise?.type ?? [];

    const handleSetInputChange = async (
        setId: string,
        key: string,
        value: string,
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
                {exerciseType.map(type => (
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
                        {exerciseType.map(type => (
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
                                        e.target.value,
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
