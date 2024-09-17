import Toast from 'components/template/Toast/Toast';
import { createContext, ReactNode, useState } from 'react';

export type ToastContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
};
type ToastProviderProps = {
    children: ReactNode;
};

export const ToastContext = createContext<ToastContextType | {}>({});
const ToastProvider = ({ children }: ToastProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <ToastContext.Provider value={{ isOpen, setIsOpen, message, setMessage }}>
            {children}
            <Toast />
        </ToastContext.Provider>
    );
};

export default ToastProvider;
