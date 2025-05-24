import {useLocation} from "react-router-dom";
import RoutineCreateButton from "./components/RoutineCreateButton/RoutineCreateButton";
import NavigateBottomBox from "components/NavigateBottomBox";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import RoutineList from "./components/RoutineList/RoutineList";
import RoutineStartModalButton from "./components/RoutineAccordion/RoutineStartModal/RoutineStartModalButton/RoutineStartModalButton";
import RoutineUpdateMoveButton from "./components/RoutineAccordion/RoutineUpdateMoveButton/RoutineUpdateMoveButton";
import RoutineAccordion from "./components/RoutineAccordion/RoutineAccordion";

const RoutineListPage = () => {
    const location = useLocation();

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <Flex direction="column" gap={20}>
                    <RoutineList
                        component={routine => (
                            <RoutineAccordion routine={routine}>
                                <RoutineUpdateMoveButton routine={routine} />
                                <RoutineStartModalButton routine={routine} />
                            </RoutineAccordion>
                        )}
                    />
                </Flex>
                <RoutineCreateButton />
            </Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineListPage;
