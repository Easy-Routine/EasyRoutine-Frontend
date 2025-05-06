import GoogleButton from "./components/GoogleButton/GoogleButton";
import AppleButton from "./components/AppleButton/AppleButton";
import KaKaoButton from "./components/KakaoButton/KakaoButton";
import NaverButton from "./components/NaverButton/NaverButton";
import Logo from "components/content/Logo/Logo";
import Flex from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import PublicPageTemplate from "headful/PublicPageTemplate/PublicPageTemplate";

const LoginPage = () => {
    return (
        <PublicPageTemplate>
            <Flex direction="column" height="100%" justify="flex-end">
                <Flex direction="column" height="70%" justify="space-around">
                    <Flex direction="column" align="center">
                        <Logo type="large" />
                        <Text size={14} align="center">
                            간단하고 편리한 운동을 위한
                            <br /> 당신의 헬스 메이트
                        </Text>
                    </Flex>

                    <Flex direction="column" padding={40} gap={16}>
                        <GoogleButton />
                        <AppleButton />
                        <KaKaoButton />
                        <NaverButton />
                    </Flex>
                </Flex>
            </Flex>
        </PublicPageTemplate>
    );
};

export default LoginPage;
