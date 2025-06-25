import NavigateBottomBox from "components/NavigateBottomBox";
import RoutineHistoryPageMoveTab from "components/RoutineHistoryPageMoveTab";
import Flex from "headful/Flex/Flex";
import LogoArea from "headful/LogoArea/LogoArea";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import {useLocation} from "react-router-dom";
import RoutineExerciseSelectBottomSheet from "./components/RoutineExerciseSelectBottomSheet";
import RoutineExerciseSelectBottomSheetButton from "./components/RoutineExerciseSelectBottomSheetButton";
import RoutineHistoryChartGetProvider from "./components/RoutineHistoryChartGetProvider";
import ExerciseAllGetProvider from "./components/ExerciseAllGetProvider";
import ExerciseFilterSearchInput from "./components/ExerciseFilterSearchInput";
import ExerciseFilterTabGroup from "./components/ExerciseFilterTabGroup";
import ExerciseSelectList from "./components/ExerciseSelectList";

const RoutineHistoryChartPage = () => {
    const location = useLocation();
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <Flex direction="column" gap={20} padding={20}>
                    <RoutineHistoryPageMoveTab />

                    <RoutineHistoryChartGetProvider>
                        {/* <RoutineHistoryGraph /> */}

                        <RoutineExerciseSelectBottomSheet>
                            <ExerciseAllGetProvider>
                                <Flex direction="column" gap={20} height="100%">
                                    <ExerciseFilterSearchInput />
                                    <ExerciseFilterTabGroup />
                                    <ExerciseSelectList />
                                </Flex>
                            </ExerciseAllGetProvider>
                            <RoutineExerciseSelectBottomSheetButton />
                        </RoutineExerciseSelectBottomSheet>
                    </RoutineHistoryChartGetProvider>
                </Flex>
            </Main>

            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineHistoryChartPage;
