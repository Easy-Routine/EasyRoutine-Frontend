import BasicTable from "headful/BasicTable/BasicTable";
import useUpdateSetConfigFieldMutation from "hooks/server/useUpdateSetConfigFiledMutation";
import React from "react";
import {useParams} from "react-router-dom";
import {SetConfig} from "types/model";

type SetProgressUpdateTableProps = {
    workoutLibraryType: string[];
    setConfigs: SetConfig[];
    currentSetConfigId: string;
    completedSetConfigIds: string[];
    onSetUpdateTableChange: (setConfigs: SetConfig[]) => void;
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
    workoutLibraryType,
    setConfigs,
    currentSetConfigId,
    completedSetConfigIds,
    onSetUpdateTableChange,
}: SetProgressUpdateTableProps) => {
    const handleSetInputChange = async (
        setConfigId: string,
        key: string,
        value: string,
    ) => {
        const newSetConfigs = structuredClone(setConfigs);

        const currentSetConfig = newSetConfigs.find(
            setConfig => setConfig._id === setConfigId,
        ) as SetConfig;

        currentSetConfig[key] = value;

        onSetUpdateTableChange(newSetConfigs);
    };

    const isCurrentSetConfig = (setConfigId: string) =>
        setConfigId === currentSetConfigId;
    const isCompletedSetConfig = (setConfigId: string) =>
        completedSetConfigIds.includes(setConfigId);

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
                            <BasicTable.Input value={setConfig.restSec} />
                        </BasicTable.Cell>
                    </BasicTable.Row>
                ))}
            </BasicTable.Body>
        </BasicTable>
    );
};

export default SetProgressUpdateTable;
