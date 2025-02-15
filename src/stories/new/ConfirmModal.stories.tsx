import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";

type ConfirmModalProps = React.ComponentProps<typeof ConfirmModal>;

const meta: Meta<ConfirmModalProps> = {
    title: "Components/ConfirmModal", // Storybook에서 표시될 제목
    component: ConfirmModal,
};

export default meta;

type Story = StoryObj<ConfirmModalProps>;

export const DefaultConfirmModal: Story = {
    render: () => (
        <ConfirmModal>
            <ConfirmModal.Backdrop />
            <ConfirmModal.Content>
                <h1>Dialog Modal</h1>
                <p>This is a dialog modal component.</p>
                <ConfirmModal.Close>
                    <ConfirmModalClose.Cancel>취소</ConfirmModalClose.Cancel>
                    <ConfirmModalClose.Confirm>확인</ConfirmModalClose.Confirm>
                </ConfirmModal.Close>
            </ConfirmModal.Content>
            <ConfirmModal.Trigger>트리거</ConfirmModal.Trigger>
        </ConfirmModal>
    ),
};
