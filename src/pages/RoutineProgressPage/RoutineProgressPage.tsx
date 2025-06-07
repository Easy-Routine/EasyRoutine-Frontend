import {useParams} from "react-router-dom";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import useRoutineGetQuery from "hooks/server/useRoutineGetQuery";
import RoutineProgressProvider from "./components/RoutineProgressProvider";
import Flex from "headful/Flex/Flex";
import RoutineExerciseList from "./components/RoutineExerciseList";
import RoutineExerciseAccordion from "./components/RoutineExerciseAccordion";

import RoutineCompleteButton from "./components/RoutineCompleteButton";
import ExerciseModal from "./components/ExerciseAddBottomSheet";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import ExerciseAllProvider from "./components/ExerciseAllGetProvider";
import SetUpdateTable from "./components/SetUpdateTable";
import SetDeleteButton from "./components/SetDeleteButton";
import SetCreateButton from "./components/SetCreateButton";
import SetCompleteButton from "./components/SetCompleteButton";
import RoutineExerciseDeleteButton from "./components/RoutineExerciseDeleteButton";
import ExerciseFilterSearchInput from "./components/ExerciseFilterSearchInput";
import ExerciseFilterTabGroup from "./components/ExerciseFilterTabGroup";
import RoutineExerciseAddProvider from "./components/RoutineExerciseAddProvider";
import RoutineExerciseAddCheckBoxGroup from "./components/RoutineExerciseAddCheckBoxGroup";
import RoutineExerciseAddButton from "./components/RoutineExerciseAddButton";

const RoutineProgressPage = () => {
    const {routineId} = useParams();
    const {data} = useRoutineGetQuery(routineId as string);
    const routine = data.routine!;

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <RoutineProgressProvider routine={routine}>
                <Main>
                    <Flex direction="column" gap={20}>
                        <RoutineExerciseList
                            component={routineExercise => (
                                <RoutineExerciseAccordion
                                    key={routineExercise.id}
                                    routineExercise={routineExercise}
                                >
                                    <SetUpdateTable
                                        routineExercise={routineExercise}
                                    />
                                    <SetDeleteButton
                                        routineExercise={routineExercise}
                                    />
                                    <SetCreateButton
                                        routineExercise={routineExercise}
                                    />
                                    <SetCompleteButton
                                        routineExercise={routineExercise}
                                    />
                                    <RoutineExerciseDeleteButton
                                        routineExercise={routineExercise}
                                    />
                                </RoutineExerciseAccordion>
                            )}
                        />
                    </Flex>

                    <ExerciseModal
                        trigger={<FloatingCircleButton />}
                        content={
                            <ExerciseAllProvider>
                                <Flex direction="column" gap={20}>
                                    <ExerciseFilterSearchInput />
                                    <ExerciseFilterTabGroup />
                                    <Flex
                                        direction="column"
                                        height={400}
                                        gap={16}
                                    >
                                        <RoutineExerciseAddProvider>
                                            <RoutineExerciseAddCheckBoxGroup />
                                            <RoutineExerciseAddButton />
                                        </RoutineExerciseAddProvider>
                                    </Flex>
                                </Flex>
                            </ExerciseAllProvider>
                        }
                    />
                </Main>
                <Footer>
                    <RoutineCompleteButton />
                </Footer>
            </RoutineProgressProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineProgressPage;
