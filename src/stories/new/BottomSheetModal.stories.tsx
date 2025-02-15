/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import Modal from "components/box/Modal/Modal";

type BottomSheetModalProps = React.ComponentProps<typeof BottomSheetModal>;

const meta: Meta<BottomSheetModalProps> = {
    title: "Components/BottomSheetModal", // Storybook에서 표시될 제목
    component: BottomSheetModal,
};

export default meta;

type Story = StoryObj<BottomSheetModalProps>;

export const DefaultBottomSheetModal: Story = {
    render: () => (
        <BottomSheetModal>
            <BottomSheetModal.Backdrop />
            <BottomSheetModal.Content>
                <h1>Dialog Modal</h1>
                <p>This is a dialog modal component.</p>
            </BottomSheetModal.Content>
            <BottomSheetModal.Trigger>트리거</BottomSheetModal.Trigger>
        </BottomSheetModal>
    ),
};
