import { ToastContext, ToastContextType } from "context/ToastContext";
import { useContext } from "react";

const useToast = () => {
    const { setMessage, setIsOpen } = useContext(
        ToastContext
    ) as ToastContextType;

    const showToast = (message: string) => {
        setIsOpen(true);
        setMessage(message);
    };

    return { showToast };
};

export default useToast;
