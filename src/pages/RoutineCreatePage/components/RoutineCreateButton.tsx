import BasicButton from "headful/BasicButton/BasicButton";
import Text from "headful/Text/Text";
import {useRoutineCreate} from "./RoutineCreateProvider";

const RoutineCreateButton = () => {
    const {routine} = useRoutineCreate();

    const handleButtonClick = () => {
        console.log("서버에 보낼 루틴 설정", routine);
    };

    return (
        <BasicButton onClick={handleButtonClick}>
            <Text color="var(--text-white)">루틴 저장하기</Text>
        </BasicButton>
    );
};

export default RoutineCreateButton;
