import NavigateBottomBox from "components/NavigateBottomBox";
import LogoArea from "headful/LogoArea/LogoArea";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import {useLocation} from "react-router-dom";

const RoutineHistoryCalendarPage = () => {
    const location = useLocation();
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>캘린더</Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineHistoryCalendarPage;
