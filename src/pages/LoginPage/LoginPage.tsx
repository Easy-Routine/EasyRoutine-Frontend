import GoogleButton from "./components/GoogleButton/GoogleButton";
import AppleButton from "./components/AppleButton/AppleButton";
import KaKaoButton from "./components/KakaoButton/KakaoButton";
import NaverButton from "./components/NaverButton/NaverButton";
import Logo from "components/content/Logo/Logo";
import Flex from "headful/Flex/Flex";
import Text from "headful/Text/Text";



const LoginPage = () => {
    return (
        <Flex
            flexDirection="column"
            height="100%"
            justifyContent="flex-end"
        >
            <Flex flexDirection="column" height='70%' justifyContent="space-around">
                <Flex flexDirection="column" alignItems="center">
                    <Logo type="large" />
                    <Text fontSize={14} textAlign="center">
                        간단하고 편리한 운동을 위한
                        <br /> 당신의 헬스 메이트
                    </Text>
                </Flex>

                <Flex flexDirection="column" padding={40} gap={16}>
                    <GoogleButton/>
                    <AppleButton />
                    <KaKaoButton/>
                    <NaverButton/>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default LoginPage;
