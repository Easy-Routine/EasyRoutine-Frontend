import { createContext, ReactNode } from 'react';

export type ModalContextType = {
    isOpen: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
};
type ModalProviderProps = {
    children: ReactNode;
    value: ModalContextType;
};

export const ModalContext = createContext<ModalContextType | {}>({});
const ModalProvider = ({ children, value }: ModalProviderProps) => {
    const { isOpen, handleOpenModal, handleCloseModal } = value;
    return (
        <ModalContext.Provider value={{ isOpen, handleOpenModal, handleCloseModal }}>{children}</ModalContext.Provider>
    );
};

export default ModalProvider;
