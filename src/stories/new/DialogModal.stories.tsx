/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import DialogModal from "headful/DialogModal/DialogModal";

type DialogModalProps = React.ComponentProps<typeof DialogModal>;

const meta: Meta<DialogModalProps> = {
    title: "Components/DialogModal", // Storybook에서 표시될 제목
    component: DialogModal,
};

export default meta;

type Story = StoryObj<DialogModalProps>;

export const DefaultDialogModal: Story = {
    render: () => (
        <DialogModal>
            <DialogModal.Backdrop />
            <DialogModal.Content>
                <h1>Dialog Modal</h1>
                <p>This is a dialog modal component.</p>
            </DialogModal.Content>
            <DialogModal.Trigger>트리거</DialogModal.Trigger>
        </DialogModal>
    ),
};
