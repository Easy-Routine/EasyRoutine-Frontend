import ModalProvider from 'context/ModalContext';
import Trigger from './Trigger';
import Backdrop from './Backdrop';
import Content from './Content';
import Close from './Close';
import { useState } from 'react';
import Portal from './Portal';
import Title from './Title';
import Description from './Description';
import Wrapper from './Wrapper';
import BottomSheet from './BottomSheet';

type ModalProps = {
    children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return <ModalProvider value={{ isOpen, handleOpenModal, handleCloseModal }}>{children}</ModalProvider>;
};
export default Modal;

Modal.Trigger = Trigger;
Modal.Backdrop = Backdrop;
Modal.Close = Close;
Modal.Content = Content;
Modal.Portal = Portal;
Modal.Title = Title;
Modal.Description = Description;
Modal.Wrapper = Wrapper;
Modal.BottomSheet = BottomSheet;
