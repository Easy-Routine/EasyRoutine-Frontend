import {useLocation} from "react-router-dom";
import RoutineConfigCreateButton from "./components/RoutineConfigCreateButton/RoutineConfigCreateButton";
import NavigateBottomBox from "components/NavigateBottomBox";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import RoutineConfigAccordion from "./components/RoutineConfigAccordion/RoutineConfigAccordion";
import RoutineConfigList from "./components/RoutineConfigList/RoutineConfigList";
import RoutineConfigStartModalButton from "./components/RoutineConfigAccordion/RoutineConfigStartModal/RoutineConfigStartModalButton/RoutineConfigStartModalButton";
import RoutineConfigUpdateMoveButton from "./components/RoutineConfigAccordion/RoutineConfigUpdateMoveButton/RoutineConfigUpdateMoveButton";

const RoutineConfigListPage = () => {
    const location = useLocation();

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <Flex direction="column" gap={20}>
                    <RoutineConfigList
                        component={routineConfig => (
                            <RoutineConfigAccordion
                                routineConfig={routineConfig}
                            >
                                <RoutineConfigUpdateMoveButton
                                    routineConfig={routineConfig}
                                />
                                <RoutineConfigStartModalButton
                                    routineConfig={routineConfig}
                                />
                            </RoutineConfigAccordion>
                        )}
                    />
                </Flex>
                <RoutineConfigCreateButton />
            </Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineConfigListPage;
