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
import RoutineHistoryAccordionList from "./components/RoutineHistoryAccordionList";
import RoutineHistoryAccordion from "./components/RoutineHistoryAccordion";
import RoutineHistoryDetailMoveButton from "./components/RoutineHistoryDetailMoveButton";
import RoutineHistoryDeleteModal from "./components/RoutineHistoryDeleteModal";
import RoutineHistoryDeleteModalButton from "./components/RoutineHistoryDeleteModalButton";
import RoutineHistoryDeleteConfirm from "./components/RoutineHistoryDeleteConfirm";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import RoutineHistoryAllGetDailyProvider from "./components/RoutineHistoryAllGetDailyProvider";

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

                    <RoutineHistoryAllGetDailyProvider>
                        <RoutineHistoryCalendar />
                        <SummaryBox>
                            <SummaryBox.Text
                                label="운동시간"
                                value="1시간 36분"
                            />
                            <SummaryBox.Text label="전체볼륨" value="3450KG" />
                        </SummaryBox>

                        <RoutineHistoryAccordionList
                            component={routineHistory => (
                                <RoutineHistoryAccordion
                                    routineHistory={routineHistory}
                                >
                                    <RoutineHistoryDetailMoveButton
                                        routineHistory={routineHistory}
                                    />
                                    <RoutineHistoryDeleteModal>
                                        <RoutineHistoryDeleteModalButton
                                            routineHistory={routineHistory}
                                        />
                                        <RoutineHistoryDeleteConfirm
                                            routineHistory={routineHistory}
                                        />
                                    </RoutineHistoryDeleteModal>
                                    <RoutineHistoryDeleteModal>
                                        <SwipeableAccordion.DeleteButton />
                                        <RoutineHistoryDeleteConfirm
                                            routineHistory={routineHistory}
                                        />
                                    </RoutineHistoryDeleteModal>
                                </RoutineHistoryAccordion>
                            )}
                        />
                    </RoutineHistoryAllGetDailyProvider>
                </Flex>
            </Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineHistoryCalendarPage;
