import type { Meta, StoryObj } from "@storybook/react";
import Toast from "components/content/Toast/Toast";
import useToast from "hooks/useToast";

type ToastProps = React.ComponentProps<typeof Toast>;

const meta: Meta<ToastProps> = {
    component: Toast,
};

export default meta;

type Story = StoryObj<any>;

export const DefaultToast: Story = {
    render: () => {
        const { showToast } = useToast();
        return (
            <>
                <button
                    onClick={() => showToast("원하시는 내용을 입력해주세요.")}
                >
                    트리거
                </button>
            </>
        );
    },
};
