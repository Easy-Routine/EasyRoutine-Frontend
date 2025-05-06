import CircleButton from "headful/CircleButton/CircleButton";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import Flex from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import React from "react";
import {RoutineConfig} from "types/model";
import RoutineConfigStartButton from "./RoutineConfigStartButton/RoutineConfigStartButton";
import {ReactComponent as FireIcon} from "assets/image/fire.svg";

type RoutineConfigStartModalContentProps = {
    routineConfig: RoutineConfig;
};

const RoutineConfigStartModalContent = ({
    routineConfig,
}: RoutineConfigStartModalContentProps) => {
    const {name} = routineConfig;

    return (
        <>
            <Flex padding={20} direction="column" align="center" gap={20}>
                <CircleButton width={65} height={65}>
                    <FireIcon
                        style={{
                            color: "white",
                            width: "30px",
                            height: "30px",
                        }}
                    />
                </CircleButton>
                <Text
                    size={"var(--fontSize-xl)"}
                    weight={"var(--fontWeight-semibold)"}
                    color={"var(--text-black)"}
                >
                    루틴 진행
                </Text>
                <Text
                    size={"var(--fontSize-md)"}
                    weight={"var(--fontWeight-regular)"}
                    color={"var(--text-black)"}
                >
                    '{name}'으로
                    <br /> 운동을 시작하시겠습니까?
                </Text>
            </Flex>
            <ConfirmModal.Close>
                <ConfirmModalClose.Cancel>취소</ConfirmModalClose.Cancel>
                <RoutineConfigStartButton routineConfig={routineConfig} />
            </ConfirmModal.Close>
        </>
    );
};

export default RoutineConfigStartModalContent;
