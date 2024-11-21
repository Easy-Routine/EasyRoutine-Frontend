import { useState, useEffect } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // 스크롤 숨기기
        } else {
            document.body.style.overflow = ""; // 원래 상태로 복원
        }

        // Clean up function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return { isOpen, handleOpenModal, handleCloseModal };
};

export default useModal;
