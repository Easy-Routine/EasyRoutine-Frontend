import NavigateBottomBox from "components/NavigateBottomBox";
import Flex from "headful/Flex/Flex";
import LogoArea from "headful/LogoArea/LogoArea";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import ProfileBox from "headful/ProfileBox/ProfileBox";
import UnderlineItem from "headful/UnderlineItem/UnderlineItem";
import {useLocation} from "react-router-dom";
import {FaBell} from "react-icons/fa";
import {FaRegEnvelope} from "react-icons/fa6";
import EmailButton from "./components/EmailButton";
import DocumentButton from "./components/DocumentButton";
import {IoDocumentText} from "react-icons/io5";
import VersionText from "./components/VersionText";
import {IoExtensionPuzzle} from "react-icons/io5";
import AlarmToggle from "./components/AlarmToggle";
import AlramProvider from "./components/AlarmProvider";
import AlarmSettingBox from "./components/AlarmSettingBox";
import Text from "headful/Text/Text";
import MemberQuitText from "./components/MemberQuitText";
import LogoutText from "./components/LogoutText";

const MyPage = () => {
    const location = useLocation();
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <Flex padding={20} direction="column" gap={30}>
                    <ProfileBox imageSrc="" name="김동현" />
                    <Flex direction="column" gap={4}>
                        <AlramProvider>
                            <UnderlineItem
                                Icon={FaBell}
                                label="알림 받기"
                                extraChildren={<AlarmSettingBox />}
                            >
                                <AlarmToggle />
                            </UnderlineItem>
                        </AlramProvider>

                        <UnderlineItem Icon={FaRegEnvelope} label="문의하기">
                            <EmailButton />
                        </UnderlineItem>
                        <UnderlineItem
                            Icon={IoDocumentText}
                            label="개인정보처리방침"
                        >
                            <DocumentButton />
                        </UnderlineItem>
                        <UnderlineItem Icon={IoExtensionPuzzle} label="앱 버전">
                            <VersionText />
                        </UnderlineItem>
                    </Flex>

                    <Flex gap={8} justify="center" align="center">
                        <MemberQuitText />
                        <Text color="#707070" size={12}>
                            |
                        </Text>
                        <LogoutText />
                    </Flex>
                </Flex>
            </Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default MyPage;
