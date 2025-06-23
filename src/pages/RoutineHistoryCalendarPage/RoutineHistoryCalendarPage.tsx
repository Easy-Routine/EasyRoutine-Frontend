import NavigateBottomBox from "components/NavigateBottomBox";
import RoutineHistoryPageMoveTab from "components/RoutineHistoryPageMoveTab";
import Flex from "headful/Flex/Flex";
import LogoArea from "headful/LogoArea/LogoArea";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import {useLocation} from "react-router-dom";
import RoutineHistoryCalendar from "./components/RoutineHistoryCaledar/RoutineHistoryCalendar";
import SummaryBox from "headful/SummaryBox/SummaryBox";

const RoutineHistoryCalendarPage = () => {
    const location = useLocation();
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <Flex direction="column" gap={20} padding={20}>
                    <RoutineHistoryPageMoveTab />
                    <RoutineHistoryCalendar />

                    <SummaryBox>
                        <SummaryBox.Text label="운동시간" value="1시간 36분" />
                        <SummaryBox.Text label="전체볼륨" value="3450KG" />
                    </SummaryBox>
                </Flex>
            </Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineHistoryCalendarPage;
