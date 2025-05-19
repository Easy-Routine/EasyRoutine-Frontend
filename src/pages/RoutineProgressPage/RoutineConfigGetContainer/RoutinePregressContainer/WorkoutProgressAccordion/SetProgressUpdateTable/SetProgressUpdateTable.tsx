import BasicTable from "headful/BasicTable/BasicTable";
import useUpdateSetConfigFieldMutation from "hooks/server/useUpdateSetConfigFiledMutation";
import React from "react";
import {useParams} from "react-router-dom";
import {SetConfig, WorkoutConfig} from "types/model";
import {useRoutineProgress} from "../../RoutineProgressProvider";

type SetProgressUpdateTableProps = {
    workoutConfig: WorkoutConfig;
    // workoutLibraryType: string[];
    // setConfigs: SetConfig[];
    // currentSetConfigId: string;
    // completedSetConfigIds: string[];
    // onSetUpdateTableChange: (setConfigs: SetConfig[]) => void;
};

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const SetProgressUpdateTable = ({
    workoutConfig,
}: SetProgressUpdateTableProps) => {
    const {workoutLibrary, _id, setConfigs} = workoutConfig;
    const {type} = workoutLibrary;

    //TODO: useRoutineProgress 다시 정의하기
    const {
        routineProgress,
        // setConfigs,
        currentWorkoutId,
        currentSetId,
        completedSetIds,
        currentWorkoutConfig,
        setRoutineProgress,
    } = useRoutineProgress(); // useRoutineConfigProgress

    const workoutLibraryType = currentWorkoutConfig?.workoutLibrary?.type ?? [];

    const handleSetInputChange = async (
        setConfigId: string,
        key: string,
        value: string,
    ) => {
        // const newRoutineProgress = structuredClone(routineProgress);
        // const currentWorkoutConfig = newRoutineProgress.workoutConfigs.find(
        //     (workoutConfig: WorkoutConfig) =>
        //         workoutConfig._id === currentWorkoutId,
        // ) as WorkoutConfig;
        // const currentSetConfig = currentWorkoutConfig.setConfigs.find(
        //     (setConfig: SetConfig) => setConfig._id === setConfigId,
        // ) as SetConfig;
        // currentSetConfig[key] = value;
        // // console.log("routineProgress", newRoutineProgress);
        // setRoutineProgress(newRoutineProgress);
    };

    const isCurrentSetConfig = (setConfigId: string) => {
        return setConfigId === currentSetId;
    };

    const isCompletedSetConfig = (setConfigId: string) =>
        completedSetIds.includes(setConfigId);

    // console.log(completedSetIds, "completedSetIds");

    return (
        <BasicTable>
            <BasicTable.Header>
                <BasicTable.Cell>세트</BasicTable.Cell>
                {workoutLibraryType.map(type => (
                    <BasicTable.Cell key={type}>
                        {typeMapper[type]}
                    </BasicTable.Cell>
                ))}
                <BasicTable.Cell>휴식</BasicTable.Cell>
            </BasicTable.Header>
            <BasicTable.Body>
                {setConfigs.map((setConfig, index) => (
                    <BasicTable.Row
                        isGrayLine={isCurrentSetConfig(setConfig._id)}
                        isPrimaryLine={isCompletedSetConfig(setConfig._id)}
                    >
                        <BasicTable.Cell>{index + 1}</BasicTable.Cell>
                        {workoutLibraryType.map(type => (
                            <BasicTable.Cell key={type}>
                                <BasicTable.Input
                                    value={setConfig[type]}
                                    onChange={e =>
                                        handleSetInputChange(
                                            setConfig._id,
                                            type,
                                            e.target.value,
                                        )
                                    }
                                />
                            </BasicTable.Cell>
                        ))}
                        <BasicTable.Cell>
                            <BasicTable.Input
                                value={setConfig.restSec}
                                onChange={e =>
                                    handleSetInputChange(
                                        setConfig._id,
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

export default SetProgressUpdateTable;
