import { ToastContext, ToastContextType } from "context/ToastContext";
import { useContext } from "react";

const useToast = () => {
    const { setMessage, setIsOpen, setType } = useContext(
        ToastContext
    ) as ToastContextType;

    const showToast = (message: string, type: "success" | "error") => {
        setIsOpen(true);
        setMessage(message);
        setType(type);
    };

    return { showToast };
};

export default useToast;
