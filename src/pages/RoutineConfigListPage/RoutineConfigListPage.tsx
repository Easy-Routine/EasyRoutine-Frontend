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
import List from "headless/List/List";
import {RoutineConfig} from "types/model";
import RoutineConfigList from "./components/RoutineConfigList/RoutineConfigList";

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
                            />
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
