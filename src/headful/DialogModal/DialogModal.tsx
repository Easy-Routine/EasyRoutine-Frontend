import React from "react";
import DialogModalBackdrop from "./DialogModalBackdrop";
import DialogModalContent from "./DialogModalContent/DialogModalContent";
import DialogModalTrigger from "./DialogModalTrigger";
import Modal from "headless/Modal/Modal";

type DialogModalProps = {
    children: React.ReactNode;
};

const DialogModal = ({children}: DialogModalProps) => {
    return <Modal>{children}</Modal>;
};

export default DialogModal;

DialogModal.Backdrop = DialogModalBackdrop;
DialogModal.Content = DialogModalContent;
DialogModal.Trigger = DialogModalTrigger;
