import FlexBox from "headful/FlexBox/FlexBox";
import Image from "headful/Image/Image";
import LineCheckBoxGroup from "headful/LineCheckBoxGroup/LineCheckBoxGroup";
import Text from "headful/Text/Text";
import React from "react";
import {WorkoutLibrary} from "types/model";

type WorkoutLibraryCheckBoxItemListProps = {
    workoutLibraries: WorkoutLibrary[];
    onCheckBoxItemClick: (value: string[]) => void;
};

const WorkoutLibraryCheckBoxItemList = ({
    workoutLibraries,
    onCheckBoxItemClick,
}: WorkoutLibraryCheckBoxItemListProps) => {
    return (
        <FlexBox
            flexDirection="column"
            style={{height: 400, overflowY: "auto"}}
            gap={16}
        >
            {workoutLibraries.map(workoutLibrary => (
                <LineCheckBoxGroup.Item
                    value={workoutLibrary._id}
                    onCheckboxGroupItemClick={onCheckBoxItemClick}
                >
                    <FlexBox gap={16}>
                        <Image
                            width={40}
                            height={40}
                            src={workoutLibrary.image}
                        />
                        <FlexBox
                            flexDirection="column"
                            justifyContent="space-around"
                        >
                            <Text fontSize="var(--fontSize-xs)">
                                {workoutLibrary.name}
                            </Text>
                        </FlexBox>
                    </FlexBox>
                </LineCheckBoxGroup.Item>
            ))}
        </FlexBox>
    );
};

export default WorkoutLibraryCheckBoxItemList;
