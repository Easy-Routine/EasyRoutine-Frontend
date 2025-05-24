import Flex from "headful/Flex/Flex";
import Image from "headful/Image/Image";
import Text from "headful/Text/Text";
import React from "react";
import {RoutineExercise} from "types/model";

type RoutineExerciseFlexProps = {
    routineExercise: RoutineExercise;
};

const RoutineExerciseFlex = ({routineExercise}: RoutineExerciseFlexProps) => {
    const {
        exercise: {image, name},
        sets,
    } = routineExercise;

    return (
        <Flex gap={16}>
            <Image width={40} height={40} src={image} />
            <Flex direction="column" justify="space-around">
                <Text
                    size={"var(--fontSize-sm)"}
                    weight={"var(--fontWeight-semibold)"}
                    color={"var(--text-black)"}
                >
                    {name}
                </Text>
                <Text
                    size={"var(--fontSize-sm)"}
                    weight={"var(--fontWeight-regular)"}
                    color={"var(--text-black)"}
                >
                    {sets.length}
                    세트
                </Text>
            </Flex>
        </Flex>
    );
};

export default RoutineExerciseFlex;
