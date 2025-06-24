import NavigateBottomBox from "components/NavigateBottomBox";
import RoutineHistoryPageMoveTab from "components/RoutineHistoryPageMoveTab";
import Flex from "headful/Flex/Flex";
import LogoArea from "headful/LogoArea/LogoArea";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import {useLocation} from "react-router-dom";

const RoutineHistoryChartPage = () => {
    const location = useLocation();
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                {/* <Flex direction="column" gap={20} padding={20}> */}
                <RoutineHistoryPageMoveTab />
                차트 페이지
                {/* </Flex> */}
            </Main>

            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineHistoryChartPage;
