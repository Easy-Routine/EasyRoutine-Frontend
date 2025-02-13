import type { Meta, StoryObj } from "@storybook/react";
import Modal from "components/box/Modal/Modal";
import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";

type ModalProps = React.ComponentProps<typeof Modal>;

const meta: Meta<ModalProps> = {
    component: Modal,
};

export default meta;

type Story = StoryObj<any>;

export const DefaultModal: Story = {
    render: () => {
        return (
            <>
                <FloatingActionButton
                    onButtonClick={() => alert("동작 수행")}
                />
            </>
        );
    },
};
