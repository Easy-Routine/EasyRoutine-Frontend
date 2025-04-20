import {useLocation} from "react-router-dom";
import RoutineConfigAllGetContainer from "./components/RoutineConfigAllGetContainer/RoutineConfigAllGetContainer";
import RoutineConfigCreateButton from "./components/RoutineConfigCreateButton/RoutineConfigCreateButton";
import NavigateBottomBox from "components/NavigateBottomBox";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";

const RoutineConfigListPage = () => {
    const location = useLocation();

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <RoutineConfigAllGetContainer />
                <RoutineConfigCreateButton />
            </Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineConfigListPage;
