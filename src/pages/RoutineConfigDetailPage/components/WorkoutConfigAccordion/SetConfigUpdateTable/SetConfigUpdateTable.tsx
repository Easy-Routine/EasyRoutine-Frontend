import BasicTable from "headful/BasicTable/BasicTable";
import {SetConfig, WorkoutConfig} from "types/model";
import {useRoutineConfigUpdateParams} from "../../RoutineConfigUpdateParamsProvider/RoutineConfigUpdateParamsProvider";

type SetConfigUpdateTableProps = {
    workoutConfig: WorkoutConfig;
};

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const SetConfigUpdateTable = ({workoutConfig}: SetConfigUpdateTableProps) => {
    // const {routineConfigId} = useParams();
    const {workoutLibrary, _id, setConfigs} = workoutConfig;
    const {type} = workoutLibrary;
    const {routineConfig, setRoutineConfig} = useRoutineConfigUpdateParams();

    const handleSetInputChange = async (
        setConfigId: string,
        key: string,
        value: string,
    ) => {
        // 루틴 설정 상태를 가져와서 깊은 복사를 해준다.
        const newRoutineConfig = structuredClone(routineConfig);
        // 운동 설정 상태의 아이디를 이용하여 해당 운동을 찾는다.
        const workoutConfigs = newRoutineConfig.workoutConfigs;
        const foundWorkoutConfig = workoutConfigs.find(
            workoutConfig => workoutConfig._id === _id,
        ) as WorkoutConfig;
        // 세트 설정 상태의 아이디를 이용하여 해당 세트를 찾는다.
        const setConfigs = foundWorkoutConfig.setConfigs;
        const foundSetConfig = setConfigs.find(
            setConfig => setConfig._id === setConfigId,
        ) as SetConfig;
        // 찾은 세트 설정의 값을 변경해준다.
        foundSetConfig[key] = value;
        // 새로운 루틴 상태로 업데이트 시켜준다.
        setRoutineConfig(newRoutineConfig);
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
                {setConfigs.map((setConfig, index) => (
                    <BasicTable.Row>
                        <BasicTable.Cell>{index + 1}</BasicTable.Cell>
                        {type.map(type => (
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

export default SetConfigUpdateTable;
