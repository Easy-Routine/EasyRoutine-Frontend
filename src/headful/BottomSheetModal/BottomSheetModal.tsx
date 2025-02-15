import React from "react";
import Modal from "headless/Modal/Modal";
import BottomSheetModalBackdrop from "./BottomSheetModalBackdrop";
import BottomSheetModalContent from "./BottomSheetModalContent";
import BottomSheetModalTrigger from "./BottomSheetModalTrigger";

type BottomSheetModalProps = {
    children: React.ReactNode;
};

const BottomSheetModal = ({children}: BottomSheetModalProps) => {
    return <Modal>{children}</Modal>;
};

export default BottomSheetModal;

BottomSheetModal.Backdrop = BottomSheetModalBackdrop;
BottomSheetModal.Content = BottomSheetModalContent;
BottomSheetModal.Trigger = BottomSheetModalTrigger;
