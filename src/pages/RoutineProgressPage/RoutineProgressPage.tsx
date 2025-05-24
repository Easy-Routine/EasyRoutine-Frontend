import {useParams} from "react-router-dom";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import useRoutineGetQuery from "hooks/server/useRoutineGetQuery";
import RoutineProgressProvider from "./RoutinePregressContainer/RoutineProgressProvider";
import Flex from "headful/Flex/Flex";
import RoutineExerciseList from "./components/RoutineExerciseList/RoutineExerciseList";
import RoutineExerciseAccordion from "./RoutinePregressContainer/RoutineExerciseAccordion/RoutineExerciseAccordion";
import SetDeleteButton from "./RoutinePregressContainer/RoutineExerciseAccordion/SetDeleteButton/SetDeleteButton";
import SetCreateButton from "./RoutinePregressContainer/RoutineExerciseAccordion/SetCreateButton/SetCreateButton";
import SetCompleteButton from "./RoutinePregressContainer/RoutineExerciseAccordion/SetCompleteButton/SetCompleteButton";
import RoutineExerciseDeleteButton from "./RoutinePregressContainer/RoutineExerciseAccordion/RoutineExerciseDeleteButton/RoutineExerciseDeleteButton";
import SetUpdateTable from "./RoutinePregressContainer/RoutineExerciseAccordion/SetUpdateTable/SetUpdateTable";
import RoutineExerciseAccordionList from "./RoutinePregressContainer/RoutineExerciseAccordionList/RoutineExerciseAccordionList";

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
                </Main>
                <Footer>푸터</Footer>
            </RoutineProgressProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineProgressPage;
