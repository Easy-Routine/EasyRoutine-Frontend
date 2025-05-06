import LineCheckBoxGroup from "headful/LineCheckBoxGroup/LineCheckBoxGroup";
import {WorkoutLibrary} from "types/model";
import Flex from "headful/Flex/Flex";
import Image from "headful/Image/Image";
import Text from "headful/Text/Text";
import {useWorkoutConfigAddParams} from "../WorkoutConfigAddParamsProvider";
import {useWorkoutLibraryAll} from "../../WorkoutLibraryAllProvider/WorkoutLibraryAllProvider";

type WorkoutConfigAddCheckBoxGroupProps = {};

const WorkoutConfigAddCheckBoxGroup =
    ({}: WorkoutConfigAddCheckBoxGroupProps) => {
        const {workoutLibraryIds, setWorkoutLibraryIds} =
            useWorkoutConfigAddParams();
        const {workoutLibraries} = useWorkoutLibraryAll();

        const handleCheckBoxItemClick = (value: string[]) => {
            setWorkoutLibraryIds(value);
        };

        return (
            <LineCheckBoxGroup defaultValue={workoutLibraryIds}>
                {workoutLibraries.map(workoutLibrary => (
                    <LineCheckBoxGroup.Item
                        value={workoutLibrary._id}
                        onCheckboxGroupItemClick={handleCheckBoxItemClick}
                    >
                        <Flex gap={16}>
                            <Image
                                width={40}
                                height={40}
                                src={workoutLibrary.image}
                            />
                            <Flex direction="column" justify="space-around">
                                <Text size="var(--fontSize-xs)">
                                    {workoutLibrary.name}
                                </Text>
                            </Flex>
                        </Flex>
                    </LineCheckBoxGroup.Item>
                ))}
            </LineCheckBoxGroup>
        );
    };

export default WorkoutConfigAddCheckBoxGroup;
