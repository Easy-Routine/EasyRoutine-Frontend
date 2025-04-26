import {useLocation} from "react-router-dom";
import RoutineConfigAllGetContainer from "./components/RoutineConfigAllGetContainer/RoutineConfigAllGetContainer";
import RoutineConfigCreateButton from "./components/RoutineConfigCreateButton/RoutineConfigCreateButton";
import NavigateBottomBox from "components/NavigateBottomBox";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import RoutineConfigAccordion from "./components/RoutineConfigAccordion/RoutineConfigAccordion";

const RoutineConfigListPage = () => {
    const location = useLocation();

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <Flex flexDirection="column" gap={20}>
                    <RoutineConfigAllGetContainer>
                        {routineConfigs =>
                            routineConfigs.map(routineConfig => (
                                <RoutineConfigAccordion
                                    key={routineConfig._id}
                                    routineConfig={routineConfig}
                                />
                            ))
                        }
                    </RoutineConfigAllGetContainer>
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
