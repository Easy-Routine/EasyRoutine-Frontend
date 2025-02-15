import React from "react";
import Modal from "headless/Modal/Modal";
import DialogModal from "headful/DialogModal/DialogModal";
import ConfirmModalClose from "./ConfirmModalClose/ConfirmModalClose";

type ConfirmModalProps = {
    children: React.ReactNode;
};

const ConfirmModal = ({children}: ConfirmModalProps) => {
    return <Modal>{children}</Modal>;
};

export default ConfirmModal;

ConfirmModal.Backdrop = DialogModal.Backdrop;
ConfirmModal.Content = DialogModal.Content;
ConfirmModal.Trigger = DialogModal.Trigger;
ConfirmModal.Close = ConfirmModalClose;
