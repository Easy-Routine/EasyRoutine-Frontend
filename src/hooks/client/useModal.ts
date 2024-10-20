import { useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        document.body.style.overflowY = "hidden";
    };
    const handleCloseModal = () => {
        setIsOpen(false);
        document.body.style.overflowY = "scroll";
    };

    return { isOpen, handleOpenModal, handleCloseModal };
};

export default useModal;
