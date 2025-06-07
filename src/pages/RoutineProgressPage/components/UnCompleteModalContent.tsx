import CircleButton from "headful/CircleButton/CircleButton";
import Flex from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import {ReactComponent as QuestionIcon} from "assets/image/question.svg";

const UnCompleteModalContent = () => {
    return (
        <Flex padding={20} direction="column" align="center" gap={20}>
            <CircleButton width={65} height={65}>
                <QuestionIcon
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
                루틴 미완료
            </Text>
            <Text
                size={"var(--fontSize-md)"}
                weight={"var(--fontWeight-regular)"}
                color={"var(--text-black)"}
            >
                이 페이지를 벗어나면 지금까지 진행한 운동만 캘린더에 저장됩니다.
                운동을 종료하시겠습니까?
            </Text>
        </Flex>
    );
};

export default UnCompleteModalContent;
