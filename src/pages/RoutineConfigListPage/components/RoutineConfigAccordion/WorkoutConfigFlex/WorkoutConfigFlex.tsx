import Flex from "headful/Flex/Flex";
import Image from "headful/Image/Image";
import Text from "headful/Text/Text";
import React from "react";
import {WorkoutConfig} from "types/model";

type WorkoutConfigFlexProps = {
    workoutConfig: WorkoutConfig;
};

const WorkoutConfigFlex = ({workoutConfig}: WorkoutConfigFlexProps) => {
    const {
        workoutLibrary: {image, name},
        setConfigs,
    } = workoutConfig;

    return (
        <Flex gap={16}>
            <Image width={40} height={40} src={image} />
            <Flex flexDirection="column" justifyContent="space-around">
                <Text
                    fontSize={"var(--fontSize-sm)"}
                    fontWeight={"var(--fontWeight-semibold)"}
                    color={"var(--text-black)"}
                >
                    {name}
                </Text>
                <Text
                    fontSize={"var(--fontSize-sm)"}
                    fontWeight={"var(--fontWeight-regular)"}
                    color={"var(--text-black)"}
                >
                    {setConfigs.length}
                    세트
                </Text>
            </Flex>
        </Flex>
    );
};

export default WorkoutConfigFlex;
