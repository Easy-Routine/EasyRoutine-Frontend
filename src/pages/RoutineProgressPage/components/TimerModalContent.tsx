import CircleButton from "headful/CircleButton/CircleButton";
import Flex from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import {ReactComponent as ClockIcon} from "assets/image/clock.svg";
import formatTime from "utils/formatTime";
import {useRoutineProgress} from "./RoutineProgressProvider";
import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Clock from "assets/image/clock.svg";
import {useModal} from "headless/Modal/Modal";

const TimerModalContent = () => {
    const {remainingTime, skipTimer} = useRoutineProgress();
    const {closeModal} = useModal();

    const handleCancelButtonClick = () => {
        closeModal();
    };
    const handleConfirmButtonClick = () => {
        skipTimer();
        closeModal();
    };

    return (
        <ConfirmSet>
            <ConfirmSet.Icon icon={Clock} />
            <ConfirmSet.Title text="루틴 삭제" />

            <ConfirmSet.Description
                text={
                    <Flex justify="center">
                        <Text size={40} weight="600">
                            {formatTime(remainingTime)}
                        </Text>
                    </Flex>
                }
            />
            <ConfirmSet.Cancel
                text="잠시 닫기"
                onButtonClick={handleCancelButtonClick}
            />
            <ConfirmSet.Confirm
                text="건너띄기"
                onButtonClick={handleConfirmButtonClick}
            />
        </ConfirmSet>
    );
};

export default TimerModalContent;
