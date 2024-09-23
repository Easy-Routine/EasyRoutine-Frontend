import Button from "../Button/Button";

type CheckBoxProps = {
    onButtonClick?: (selectedValues: string[]) => void;
    selectedValues: string[];
};

const SubmitButton = ({ onButtonClick, selectedValues }: CheckBoxProps) => {
    // 버튼을 클릭하면, 선택상태가 변경된다.

    const handleButtonClick = () => {
        onButtonClick && onButtonClick(selectedValues);
        console.log(selectedValues);
    };

    return <Button onClick={handleButtonClick}>운동 추가하기</Button>;
};

export default SubmitButton;
