import {useParams} from "react-router-dom";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import RoutineExerciseAccordion from "./components/RoutineExerciseAccordion";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import BottomBox from "headful/BottomBox/BottomBox";
import useRoutineGetQuery from "hooks/server/useRoutineGetQuery";
import SetCreateButton from "./components/SetCreateButton";
import RoutineExerciseList from "./components/RoutineExerciseList";
import SetUpdateTable from "./components/SetUpdateTable";
import SetDeleteButton from "./components/SetDeleteButton";
import RoutineExerciseDeleteButton from "./components/RoutineExerciseDeleteButton";
import RoutineUpdateButton from "./components/RoutineUpdateButton";
import ExerciseFilterSearchInput from "./components/ExerciseFilterSearchInput";
import ExerciseFilterTabGroup from "./components/ExerciseFilterTabGroup";
import RoutineExerciseAddCheckBoxGroup from "./components/RoutineExerciseAddCheckBoxGroup";
import RoutineExerciseAddButton from "./components/RoutineExerciseAddButton";
import RoutineColorUpdateTabGroup from "./components/RoutineColorUpdateTabGroup";
import RoutineExerciseAddProvider from "./components/RoutineExerciseAddProvider";
import RoutineUpdateProvider from "./components/RoutineUpdateProvider";
import ExerciseAddBottomSheet from "./components/ExerciseAddBottomSheet";
import ExerciseAllGetProvider from "./components/ExerciseAllGetProvider";

const RoutineDetailPage = () => {
    const {routineId} = useParams();
    const {data} = useRoutineGetQuery(routineId as string);
    const routine = data.routine!;

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <RoutineUpdateProvider defaultValue={routine}>
                <Main>
                    <Flex direction="column" gap={20} padding={20}>
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
                        <RoutineUpdateButton />
                    </Flex>

                    <ExerciseAddBottomSheet>
                        <FloatingCircleButton />

                        <ExerciseAllGetProvider>
                            <Flex direction="column" gap={20} height="100%">
                                <ExerciseFilterSearchInput />
                                <ExerciseFilterTabGroup />

                                <RoutineExerciseAddProvider>
                                    <RoutineExerciseAddCheckBoxGroup />
                                    <RoutineExerciseAddButton />
                                </RoutineExerciseAddProvider>
                            </Flex>
                        </ExerciseAllGetProvider>
                    </ExerciseAddBottomSheet>
                </Main>
                <Footer>
                    <BottomBox>
                        <RoutineColorUpdateTabGroup />
                    </BottomBox>
                </Footer>
            </RoutineUpdateProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineDetailPage;
