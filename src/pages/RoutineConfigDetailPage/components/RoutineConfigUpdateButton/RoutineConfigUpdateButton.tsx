import BasicButton from "headful/BasicButton/BasicButton";
import Text from "headful/Text/Text";
import React from "react";
import {useRoutineConfigUpdateParams} from "../RoutineConfigUpdateParamsProvider/RoutineConfigUpdateParamsProvider";

const RoutineConfigUpdateButton = () => {
    const {routineConfig} = useRoutineConfigUpdateParams();

    const handleButtonClick = () => {
        console.log("서버에 보낼 루틴 설정", routineConfig);
    };

    return (
        <BasicButton onClick={handleButtonClick}>
            <Text color="var(--text-white)">루틴 저장하기</Text>
        </BasicButton>
    );
};

export default RoutineConfigUpdateButton;
