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
import RoutineCompleteButton from "./components/RoutineCompleteButton/RoutineCompleteButton";
import ExerciseModal from "./components/ExerciseModal/ExerciseModal";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import ExerciseAllProvider from "./components/ExerciseAllProvider/ExerciseAllProvider";
import ExerciseFilterSearchInput from "./components/ExerciseFilterSearchInput/ExerciseFilterSearchInput";
import ExerciseFilterTabGroup from "./components/ExerciseFilterTabGroup/ExerciseFilterTabGroup";
import RoutineExerciseAddParamsProvider from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddParamsProvider";
import RoutineExerciseAddCheckBoxGroup from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddCheckGroup/RoutineExerciseAddCheckBoxGroup";
import RoutineExerciseAddButton from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddButton/RoutineExerciseAddButton";

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
                        trigger={
                            <FloatingCircleButton
                                width={64}
                                height={64}
                                onFloatingCircleButtonClick={() => {}}
                            >
                                <PlusIcon color={"var(--text-white)"} />
                            </FloatingCircleButton>
                        }
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
                                        <RoutineExerciseAddParamsProvider>
                                            <RoutineExerciseAddCheckBoxGroup />
                                            <RoutineExerciseAddButton />
                                        </RoutineExerciseAddParamsProvider>
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
