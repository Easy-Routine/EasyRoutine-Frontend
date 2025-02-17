import {useTheme} from "@emotion/react";
import FlexBox from "headful/FlexBox/FlexBox";
import Image from "headful/Image/Image";
import Text from "headful/Text/Text";
import React from "react";
import {WorkoutConfig} from "types/model";

type WorkoutConfigFlexBoxListProps = {
    workoutConfigs: WorkoutConfig[];
};

const WorkoutConfigFlexBoxList = ({
    workoutConfigs,
}: WorkoutConfigFlexBoxListProps) => {
    const theme = useTheme();

    return (
        <FlexBox
            padding={{top: 10, bottom: 10}}
            flexDirection="column"
            gap={12}
        >
            {workoutConfigs.map(
                ({
                    setConfigs,
                    workoutLibrary: {image, name},
                }: WorkoutConfig) => (
                    <FlexBox gap={16}>
                        <Image width={40} height={40} src={image} />
                        <FlexBox
                            flexDirection="column"
                            justifyContent="space-around"
                        >
                            <Text
                                fontSize={theme.fontSize.sm}
                                fontWeight={theme.fontWeight.semibold}
                            >
                                {name}
                            </Text>
                            <Text
                                fontSize={theme.fontSize.sm}
                                fontWeight={theme.fontWeight.regular}
                            >
                                {setConfigs.length}
                                세트
                            </Text>
                        </FlexBox>
                    </FlexBox>
                ),
            )}
        </FlexBox>
    );
};

export default WorkoutConfigFlexBoxList;
