import LineCheckBoxGroup from "headful/LineCheckBoxGroup/LineCheckBoxGroup";
import {Exercise} from "types/model";
import Flex from "headful/Flex/Flex";
import Image from "headful/Image/Image";
import Text from "headful/Text/Text";
import {useRoutineExerciseAdd} from "./RoutineExerciseAddProvider";
import {useExerciseAllGet} from "./ExerciseAllGetProvider";

type RoutineExerciseAddCheckBoxGroupProps = {};

const RoutineExerciseAddCheckBoxGroup =
    ({}: RoutineExerciseAddCheckBoxGroupProps) => {
        const {exerciseIds, setExerciseIds} = useRoutineExerciseAdd();
        const {workoutLibraries} = useExerciseAllGet();

        const handleCheckBoxItemClick = (value: string[]) => {
            setExerciseIds(value);
        };

        return (
            <LineCheckBoxGroup defaultValue={exerciseIds}>
                {workoutLibraries.map(exercise => (
                    <LineCheckBoxGroup.Item
                        value={exercise.id.toString()}
                        onCheckboxGroupItemClick={handleCheckBoxItemClick}
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
                    </LineCheckBoxGroup.Item>
                ))}
            </LineCheckBoxGroup>
        );
    };

export default RoutineExerciseAddCheckBoxGroup;
