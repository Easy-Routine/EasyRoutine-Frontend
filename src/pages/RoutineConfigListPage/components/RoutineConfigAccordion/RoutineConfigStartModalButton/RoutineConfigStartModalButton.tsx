import FlexBox from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import {ReactComponent as RunIcon} from "assets/image/run.svg";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import Portal from "headless/Portal/Portal";
import {RoutineConfig} from "types/model";
import RoutineConfigStartModalContent from "./RoutineConfigStartModalContent/RoutineConfigStartModalContent";

type RoutineConfigStartModalButtonProps = {
    routineConfig: RoutineConfig;
};

const RoutineConfigStartModalButton = ({
    routineConfig,
}: RoutineConfigStartModalButtonProps) => {
    const {name} = routineConfig;
    return (
        <ConfirmModal>
            <div
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                <ConfirmModal.Trigger>
                    <FlexBox gap={16} alignItems="center">
                        <RunIcon color={"#82B1FF"} />
                        <Text color={"var(--color-primary)"}>
                            루틴 시작하기
                        </Text>
                    </FlexBox>
                </ConfirmModal.Trigger>
                <Portal>
                    <ConfirmModal.Backdrop />
                    <ConfirmModal.Content>
                        <RoutineConfigStartModalContent
                            routineConfig={routineConfig}
                        />
                    </ConfirmModal.Content>
                </Portal>
            </div>
        </ConfirmModal>
    );
};

export default RoutineConfigStartModalButton;
