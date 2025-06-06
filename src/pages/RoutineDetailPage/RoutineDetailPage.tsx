import {useParams} from "react-router-dom";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import RoutineExerciseAccordion from "./components/RoutineExerciseAccordion/RoutineExerciseAccordion";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import BottomBox from "headful/BottomBox/BottomBox";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import ExerciseFilterSearchInput from "./components/ExerciseFilterSearchInput/ExerciseFilterSearchInput";
import ExerciseFilterTabGroup from "./components/ExerciseFilterTabGroup/ExerciseFilterTabGroup";
import RoutineColorUpdateTabGroup from "./components/RoutineColorUpdateTabGroup/RoutineColorUpdateTabGroup";
import useRoutineGetQuery from "hooks/server/useRoutineGetQuery";
import RoutineUpdateParamsProvider from "./components/RoutineUpdateParamsProvider/RoutineUpdateParamsProvider";
import SetUpdateTable from "./components/RoutineExerciseAccordion/SetUpdateTable/SetUpdateTable";
import SetDeleteButton from "./components/RoutineExerciseAccordion/SetDeleteButton/SetDeleteButton";
import SetCreateButton from "./components/RoutineExerciseAccordion/SetCreateButton/SetCreateButton";
import RoutineExerciseDeleteButton from "./components/RoutineExerciseAccordion/RoutineExerciseDeleteButton/RoutineExerciseDeleteButton";
import RoutineUpdateButton from "./components/RoutineUpdateButton/RoutineUpdateButton";
import RoutineExerciseAddParamsProvider from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddParamsProvider";
import RoutineExerciseAddCheckBoxGroup from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddCheckGroup/RoutineExerciseAddCheckBoxGroup";
import RoutineExerciseAddButton from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddButton/RoutineExerciseAddButton";
import ExerciseModal from "./components/ExerciseModal/ExerciseModal";
import ExerciseAllProvider from "./components/ExerciseAllProvider/ExerciseAllProvider";
import RoutineExerciseList from "./components/RoutineExerciseList/RoutineExerciseList";

const RoutineDetailPage = () => {
    const {routineId} = useParams();
    const {data} = useRoutineGetQuery(routineId as string);
    const routine = data.routine!;

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <RoutineUpdateParamsProvider defaultValue={routine}>
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
                        <RoutineUpdateButton />
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
                    <BottomBox>
                        <RoutineColorUpdateTabGroup />
                    </BottomBox>
                </Footer>
            </RoutineUpdateParamsProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineDetailPage;
