import { useState } from "react";

const useAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [x, setX] = useState(0);
    const [opacity, setOpacity] = useState(0);

    // useEffect(() => {
    //     if (isCurrentAccordion) {
    //         console.log(isCurrentAccordion);
    //         setIsOpen(true);
    //     }
    // }, [isCurrentAccordion]);

    const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
        if (info.offset.x > 0) {
            // 오른쪽으로 드래그
            setX(0); // 원래 위치로 돌아가기
            setOpacity(0);
        } else {
            // 왼쪽으로 드래그
            setX(-65); // 왼쪽으로 이동하여 삭제 버튼 보이기
            setOpacity(1);
        }
    };

    const handleToggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, handleToggleAccordion, handleDragEnd, opacity, x };
};

export default useAccordion;
