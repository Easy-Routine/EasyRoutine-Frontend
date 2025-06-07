import CircleButton from "headful/CircleButton/CircleButton";
import Flex from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import {ReactComponent as ClockIcon} from "assets/image/clock.svg";
import formatTime from "utils/formatTime";
import {useRoutineProgress} from "./RoutineProgressProvider";

const TimerModalContent = () => {
    const {remainingTime} = useRoutineProgress();
    return (
        <Flex padding={20} direction="column" align="center" gap={20}>
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
                size={"var(--fontSize-xl)"}
                weight={"var(--fontWeight-semibold)"}
                color={"var(--text-black)"}
            >
                휴식 타이머
            </Text>
            <Text
                size={"var(--fontSize-md)"}
                weight={"var(--fontWeight-regular)"}
                color={"var(--text-black)"}
            >
                {formatTime(remainingTime)}
            </Text>
        </Flex>
    );
};

export default TimerModalContent;
