import Modal from "headless/Modal/Modal";
import React from "react";

type DialogModalTriggerProps = {
    children: React.ReactNode;
};

const DialogModalTrigger = ({children}: DialogModalTriggerProps) => {
    return <Modal.Trigger>{children}</Modal.Trigger>;
};

export default DialogModalTrigger;
