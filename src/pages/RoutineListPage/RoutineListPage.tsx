import {useLocation} from "react-router-dom";
import RoutineCreateButton from "./components/RoutineCreateButton";
import NavigateBottomBox from "components/NavigateBottomBox";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import RoutineList from "./components/RoutineList";
import RoutineStartModalButton from "./components/RoutineStartModalButton";
import RoutineUpdateMoveButton from "./components/RoutineUpdateMoveButton";
import RoutineAccordion from "./components/RoutineAccordion";
import RoutineStartModal from "./components/RoutineStartModal";
import RoutineStartConfirm from "./components/RoutineStartConfirm";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import RoutineDeleteModal from "./components/RoutineDeleteModal";
import RoutineDeleteConfirm from "./components/RoutineDeleteConfirm";

const RoutineListPage = () => {
    const location = useLocation();

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <Flex direction="column" gap={20} padding={20} height={"100%"}>
                    <RoutineList
                        component={routineAllGetRes => (
                            <RoutineAccordion
                                routineAllGetRes={routineAllGetRes}
                            >
                                <RoutineUpdateMoveButton
                                    routineAllGetRes={routineAllGetRes}
                                />
                                <RoutineStartModal>
                                    <RoutineStartModalButton
                                        routineAllGetRes={routineAllGetRes}
                                    />
                                    <RoutineStartConfirm
                                        routineAllGetRes={routineAllGetRes}
                                    />
                                </RoutineStartModal>
                                <RoutineDeleteModal>
                                    <SwipeableAccordion.DeleteButton />
                                    <RoutineDeleteConfirm
                                        routineAllGetRes={routineAllGetRes}
                                    />
                                </RoutineDeleteModal>
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
