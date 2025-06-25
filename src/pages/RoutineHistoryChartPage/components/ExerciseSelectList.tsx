import LineCheckBoxGroup from "headful/LineCheckBoxGroup/LineCheckBoxGroup";
import Flex from "headful/Flex/Flex";
import Image from "headful/Image/Image";
import Text from "headful/Text/Text";
import {useExerciseAllGet} from "./ExerciseAllGetProvider";
import LineSelectGroup from "headful/LineSelectGroup/LineSelectGroup";
import {SelectGroupValue} from "headless/SelectGroup/SelectGroupItem";
import {useRoutineHistoryChartGet} from "./RoutineHistoryChartGetProvider";

type ExerciseSelectListProps = {};

const ExerciseSelectList = ({}: ExerciseSelectListProps) => {
    // const {exerciseIds, setExerciseIds} = useRoutineExerciseAdd();
    const {exercises} = useExerciseAllGet();
    const {exerciseId, setExerciseId} = useRoutineHistoryChartGet();

    const handleSelectItemClick = (value: SelectGroupValue) => {
        // setExerciseIds(value);
        setExerciseId(Number(value));
    };

    return (
        <LineSelectGroup defaultValue={exerciseId.toString()}>
            {exercises.map(exercise => (
                <LineSelectGroup.Item
                    key={exercise.id.toString()}
                    value={exercise.id.toString()}
                    onSelectGroupItemClick={handleSelectItemClick}
                >
                    <Flex gap={16}>
                        <Image
                            width={40}
                            height={40}
                            src={exercise?.image ?? ""}
                        />
                        <Flex direction="column" justify="space-around">
                            <Text size="var(--fontSize-xs)">
                                {exercise.name}
                            </Text>
                        </Flex>
                    </Flex>
                </LineSelectGroup.Item>
            ))}
        </LineSelectGroup>
    );
};

export default ExerciseSelectList;
