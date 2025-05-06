import BasicButton from "headful/BasicButton/BasicButton";
import Text from "headful/Text/Text";
import {useRoutineConfigCreate} from "../RoutineConfigCreateProvider/RoutineConfigCreateProvider";

const RoutineConfigCreateButton = () => {
    const {routineConfig} = useRoutineConfigCreate();

    const handleButtonClick = () => {
        console.log("서버에 보낼 루틴 설정", routineConfig);
    };

    return (
        <BasicButton onClick={handleButtonClick}>
            <Text color="var(--text-white)">루틴 저장하기</Text>
        </BasicButton>
    );
};

export default RoutineConfigCreateButton;
