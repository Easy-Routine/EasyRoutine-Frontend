import CircleButton from "headful/CircleButton/CircleButton";
import Flex from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import {ReactComponent as CheckIcon} from "assets/image/check.svg";

const CompleteModalContent = () => {
    return (
        <Flex padding={20} direction="column" align="center" gap={20}>
            <CircleButton width={65} height={65}>
                <CheckIcon
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
                루틴 완료
            </Text>
            <Text
                size={"var(--fontSize-md)"}
                weight={"var(--fontWeight-regular)"}
                color={"var(--text-black)"}
            >
                설정한 루틴이 모두 완료되었습니다. 운동 기록을 확인하려면 기록
                페이지로 이동해 주세요. 남아서 운동을 계속하려면 '운동
                계속하기'를 눌러주세요.
            </Text>
        </Flex>
    );
};

export default CompleteModalContent;
