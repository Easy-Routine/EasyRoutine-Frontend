import NavigateBottomBox from "components/NavigateBottomBox";
import Flex from "headful/Flex/Flex";
import LogoArea from "headful/LogoArea/LogoArea";
import OutlinedButton from "headful/OutlinedButton/OutlinedButton";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import ProfileBox from "headful/ProfileBox/ProfileBox";
import UnderlineItem from "headful/UnderlineItem/UnderlineItem";
import {useLocation} from "react-router-dom";
import {CiUser} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";
import Text from "headful/Text/Text";

const MyPage = () => {
    const location = useLocation();
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <Flex padding={20} flexDirection="column" gap={30}>
                    <ProfileBox imageSrc="" name="김동현" />
                    <OutlinedButton style={{alignSelf: "center"}}>
                        로그아웃
                    </OutlinedButton>
                    <UnderlineItem>
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Flex gap={10} alignItems="center">
                                <CiUser size={24} />
                                <Text>문의사항</Text>
                            </Flex>
                            <IoIosArrowForward size={24} />
                        </Flex>
                    </UnderlineItem>
                </Flex>
            </Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default MyPage;
