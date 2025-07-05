import SelectB from "headful/SelectB/SelectB";
import Text from "headful/Text/Text";
import React from "react";
import {useExerciseAllGet} from "./ExerciseAllGetProvider";
import {useRoutineHistoryChartGet} from "./RoutineHistoryChartGetProvider";
import {Category, Type} from "types/enum";
import Flex from "headful/Flex/Flex";
import {SelectGroupValue} from "headless/SelectGroup/SelectGroupItem";

const TypeMapper: Record<Type, string> = {
    [Type.WEIGHT]: "무게",
    [Type.TIME]: "시간",
    [Type.COUNT]: "횟수",
};

const TypeSelect = () => {
    const {exerciseId, type, setType} = useRoutineHistoryChartGet();
    const {exercises} = useExerciseAllGet();

    const foundExercise = exercises.find(
        exercise => exercise.id === exerciseId,
    );

    const handleItemClick = (value: SelectGroupValue) => {
        setType(value as Type);
    };

    return (
        <Flex gap={12} align="center">
            <Text size={12} weight="500">
                타입:
            </Text>
            <SelectB defaultValue={type}>
                <SelectB.Trigger
                    disabled={!foundExercise}
                    render={value => {
                        return (
                            <div>
                                <span>
                                    {TypeMapper[value as Type] ?? "선택"}
                                </span>
                            </div>
                        );
                    }}
                />
                <SelectB.Content>
                    {foundExercise?.types.map(t => (
                        <SelectB.Item
                            value={t}
                            onSelectGroupItemClick={handleItemClick}
                        >
                            {TypeMapper[t as Type]}
                        </SelectB.Item>
                    ))}
                </SelectB.Content>
            </SelectB>
        </Flex>
    );
};

export default TypeSelect;
