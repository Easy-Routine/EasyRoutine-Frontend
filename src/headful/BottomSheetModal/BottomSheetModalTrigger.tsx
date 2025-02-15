import Modal from "headless/Modal/Modal";
import React from "react";

type BottomSheetModalTriggerProps = {
    children: React.ReactNode;
};

const BottomSheetModalTrigger = ({children}: BottomSheetModalTriggerProps) => {
    return <Modal.Trigger>{children}</Modal.Trigger>;
};

export default BottomSheetModalTrigger;
