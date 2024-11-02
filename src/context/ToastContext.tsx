import Toast from "components/content/Toast/Toast";
import { createContext, ReactNode, useState } from "react";

export type ToastContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    type: "success" | "error";
    setType: React.Dispatch<React.SetStateAction<"success" | "error">>;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
};
type ToastProviderProps = {
    children: ReactNode;
};

export const ToastContext = createContext<ToastContextType | {}>({});
const ToastProvider = ({ children }: ToastProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");

    return (
        <ToastContext.Provider
            value={{ isOpen, setIsOpen, message, setMessage, type, setType }}
        >
            {children}
            <Toast />
        </ToastContext.Provider>
    );
};

export default ToastProvider;
