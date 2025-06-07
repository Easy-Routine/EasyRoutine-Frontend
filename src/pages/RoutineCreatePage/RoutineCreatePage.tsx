import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import BottomBox from "headful/BottomBox/BottomBox";
import RoutineCreateProvider from "./components/RoutineCreateProvider";
import RoutineExerciseAccordion from "./components/RoutineExerciseAccordion";
import RoutineExerciseAddParamsProvider from "./components/RoutineExerciseAddProvider";
import RoutineExerciseList from "./components/RoutineExerciseList";
import SetUpdateTable from "./components/SetUpdateTable";
import SetDeleteButton from "./components/SetDeleteButton";
import SetCreateButton from "./components/SetCreateButton";
import RoutineExerciseDeleteButton from "./components/RoutineExerciseDeleteButton";
import RoutineCreateButton from "./components/RoutineCreateButton";
import ExerciseFilterSearchInput from "./components/ExerciseFilterSearchInput";
import ExerciseFilterTabGroup from "./components/ExerciseFilterTabGroup";
import RoutineExerciseAddCheckBoxGroup from "./components/RoutineExerciseAddCheckBoxGroup";
import RoutineExerciseAddButton from "./components/RoutineExerciseAddButton";
import RoutineColorUpdateTabGroup from "./components/RoutineColorUpdateTabGroup";
import ExerciseAddModal from "./components/ExerciseAddModal";
import ExerciseAllGetProvider from "./components/ExerciseAllGetProvider";
import RoutineExerciseAddProvider from "./components/RoutineExerciseAddProvider";

const RoutineCreatePage = () => {
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <RoutineCreateProvider>
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
                                    <RoutineExerciseDeleteButton
                                        routineExercise={routineExercise}
                                    />
                                </RoutineExerciseAccordion>
                            )}
                        />
                        <RoutineCreateButton />
                    </Flex>

                    <ExerciseAddModal>
                        <FloatingCircleButton />
                        <ExerciseAllGetProvider>
                            <Flex direction="column" gap={20}>
                                <ExerciseFilterSearchInput />
                                <ExerciseFilterTabGroup />
                                <Flex direction="column" height={400} gap={16}>
                                    <RoutineExerciseAddProvider>
                                        <RoutineExerciseAddCheckBoxGroup />
                                        <RoutineExerciseAddButton />
                                    </RoutineExerciseAddProvider>
                                </Flex>
                            </Flex>
                        </ExerciseAllGetProvider>
                    </ExerciseAddModal>
                </Main>
                <Footer>
                    <BottomBox>
                        <RoutineColorUpdateTabGroup />
                    </BottomBox>
                </Footer>
            </RoutineCreateProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineCreatePage;
