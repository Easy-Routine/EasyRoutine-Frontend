import {
    CheckBoxGroupContext,
    CheckBoxGroupContextType,
} from "context/CheckBoxGroupContext";
import { useContext } from "react";
import Button from "../Button/Button";

type CheckBoxProps = {
    onButtonClick?: (selectedValues: string[]) => void;
};

const SubmitButton = ({ onButtonClick }: CheckBoxProps) => {
    // 버튼을 클릭하면, 선택상태가 변경된다.
    const { selectedValues } = useContext(
        CheckBoxGroupContext
    ) as CheckBoxGroupContextType;

    const handleButtonClick = () => {
        onButtonClick && onButtonClick(selectedValues);
        console.log(selectedValues);
    };

    return <Button onClick={handleButtonClick}>운동 추가하기</Button>;
};

export default SubmitButton;
