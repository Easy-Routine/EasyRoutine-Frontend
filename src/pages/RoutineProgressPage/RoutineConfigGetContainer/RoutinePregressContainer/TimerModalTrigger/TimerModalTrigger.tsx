import CircleButton from "headful/CircleButton/CircleButton";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import Flex from "headful/Flex/Flex";
import styles from "./TimerModalTrigger.module.scss";
import {ReactComponent as ClockIcon} from "assets/image/clock.svg";
import React from "react";
import Text from "headful/Text/Text";
import moment from "moment";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";

type TimerModalTriggerProps = {
    children: React.ReactNode;
    remainingTime: number;
};

const TimerModalTrigger = ({
    children,
    remainingTime,
}: TimerModalTriggerProps) => {
    const formattedTime = moment
        .duration(remainingTime, "seconds")
        .format("mm:ss", {
            trim: false,
        });

    // seconds가 1초 이상 9초 이하일 경우 경고 스타일 클래스 적용

    // const combinedClassName = classNames(styles.Text, {
    //     [styles.Warning]: value <= 9 && value >= 1,
    // });

    return (
        <ConfirmModal>
            <ConfirmModal.Trigger className={styles.TimerModalTrigger}>
                {children}
            </ConfirmModal.Trigger>
            <ConfirmModal.Backdrop />

            <ConfirmModal.Content>
                <Flex
                    padding={20}
                    flexDirection="column"
                    alignItems="center"
                    gap={20}
                >
                    <CircleButton width={65} height={65}>
                        <ClockIcon
                            style={{
                                color: "white",
                                width: "30px",
                                height: "30px",
                            }}
                        />
                    </CircleButton>
                    <Text
                        fontSize={"var(--fontSize-xl)"}
                        fontWeight={"var(--fontWeight-semibold)"}
                        color={"var(--text-black)"}
                    >
                        루틴 삭제
                    </Text>
                    <Text
                        fontSize={"var(--fontSize-md)"}
                        fontWeight={"var(--fontWeight-regular)"}
                        color={"var(--text-black)"}
                        textAlign="center"
                    >
                        {formattedTime}
                    </Text>
                </Flex>
                <ConfirmModal.Close>
                    <ConfirmModalClose.Cancel>취소</ConfirmModalClose.Cancel>
                    <ConfirmModalClose.Confirm>확인</ConfirmModalClose.Confirm>
                </ConfirmModal.Close>
            </ConfirmModal.Content>
        </ConfirmModal>
    );
};

export default TimerModalTrigger;
