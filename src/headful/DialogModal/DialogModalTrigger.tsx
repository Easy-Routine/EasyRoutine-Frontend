import Modal from "headless/Modal/Modal";
import React, {HTMLAttributes} from "react";

type DialogModalTriggerProps = HTMLAttributes<HTMLSpanElement> & {
    children: React.ReactNode;
};

const DialogModalTrigger = ({children, ...props}: DialogModalTriggerProps) => {
    return <Modal.Trigger {...props}>{children}</Modal.Trigger>;
};

export default DialogModalTrigger;
