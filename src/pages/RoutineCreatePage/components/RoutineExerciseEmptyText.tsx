import Text from "headful/Text/Text";
import {useRoutineCreate} from "./RoutineCreateProvider";
import Flex from "headful/Flex/Flex";

const RoutineExerciseEmptyText = () => {
    const {routine} = useRoutineCreate();

    return (
        <Flex justify="center">
            {routine.routineExercises.length === 0 ? (
                <Text size={13} color="#a8a8a8" align="center">
                    위 버튼을 통해 <br /> 원하는 운동 종목을 추가해주세요
                </Text>
            ) : null}
        </Flex>
    );
};

export default RoutineExerciseEmptyText;
