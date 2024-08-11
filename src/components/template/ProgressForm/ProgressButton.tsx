import React, { useContext } from "react";
import Button from "../Button/Button";
import { ProgressContext, ProgressContextType } from "context/ProgressContext";
import useToast from "hooks/useToast";

const ProgressButton = () => {
    const { setCurrentItem, setCompletedInputs, iteratorRef, completedInputs } =
        useContext(ProgressContext) as ProgressContextType;
    const { showToast } = useToast();

    const handleButtonClick = () => {
        const result = iteratorRef.current?.next();

        if (result?.done) {
            showToast("운동이 완료됐습니다.");
            return;
        }
        setCurrentItem(result?.value);
        setCompletedInputs((prevState) => [
            ...prevState,
            result?.value.inputId,
        ]);
        console.log(completedInputs);
        console.log(result);
    };

    return <Button onClick={handleButtonClick}>다음 세트</Button>;
};

export default ProgressButton;
