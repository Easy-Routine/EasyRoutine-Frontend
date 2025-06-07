import BasicButton from "headful/BasicButton/BasicButton";
import Text from "headful/Text/Text";
import {useRoutineUpdate} from "./RoutineUpdateProvider";
import useRoutineUpdateMutation from "hooks/server/useRoutineUpdateMutation";

const RoutineUpdateButton = () => {
    const {routine} = useRoutineUpdate();
    const {mutateAsync: updateRoutineMutate} = useRoutineUpdateMutation();

    const handleButtonClick = async () => {
        console.log("서버에 보낼 루틴 설정", routine);

        await updateRoutineMutate(routine);
    };

    return (
        <BasicButton onClick={handleButtonClick}>
            <Text color="var(--text-white)">루틴 수정하기</Text>
        </BasicButton>
    );
};

export default RoutineUpdateButton;
