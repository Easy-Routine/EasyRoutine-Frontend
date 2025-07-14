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
import RoutineHistoryExerciseVolumeGraph from "./components/RoutineHistoryExerciseVolumeGraph";
import ExerciseNameInput from "./components/ExerciseNameInput";
import ContentBox from "headful/ContentBox/ContentBox";
import PeriodTabGroup from "./components/PeriodTabGroup";
import TypeSelect from "./components/TypeSelect";
import GrayContentBox from "headful/GrayContentBox/GrayContentBox";

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
                        <ExerciseAllGetProvider>
                            <ExerciseNameInput />
                            <ContentBox>
                                <Flex direction="column" gap={20}>
                                    <TypeSelect />
                                    <PeriodTabGroup />
                                    <RoutineHistoryExerciseVolumeGraph />
                                    <GrayContentBox>
                                        최근 1주 동안 운동량이 늘었어요. 좋은
                                        루틴이 만들어지고 있어요!
                                    </GrayContentBox>
                                </Flex>
                            </ContentBox>

                            <RoutineExerciseSelectBottomSheet>
                                {/*운동 목록을 가져오는 역할*/}

                                <Flex
                                    direction="column"
                                    gap={20}
                                    height="100%"
                                    padding={20}
                                >
                                    <ExerciseFilterSearchInput />
                                    <ExerciseFilterTabGroup />
                                    <ExerciseSelectList />
                                </Flex>

                                <RoutineExerciseSelectBottomSheetButton />
                            </RoutineExerciseSelectBottomSheet>
                        </ExerciseAllGetProvider>
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
