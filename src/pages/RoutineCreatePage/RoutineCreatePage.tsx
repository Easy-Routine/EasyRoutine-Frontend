import {useParams} from "react-router-dom";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import BottomBox from "headful/BottomBox/BottomBox";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import RoutineCreateProvider from "./components/RoutineCreateProvider/RoutineCreateProvider";
import RoutineExerciseList from "./components/RoutineExerciseList/RoutineExerciseList";
import RoutineExerciseAccordion from "./components/RoutineExerciseAccordion/RoutineExerciseAccordion";
import SetUpdateTable from "./components/RoutineExerciseAccordion/SetUpdateTable/SetUpdateTable";
import SetDeleteButton from "./components/RoutineExerciseAccordion/SetDeleteButton/SetDeleteButton";
import SetCreateButton from "./components/RoutineExerciseAccordion/SetCreateButton/SetCreateButton";
import RoutineExerciseDeleteButton from "./components/RoutineExerciseAccordion/RoutineExerciseDeleteButton/RoutineExerciseDeleteButton";
import ExerciseModal from "./components/ExerciseModal/ExerciseModal";
import ExerciseAllProvider from "./components/ExerciseAllProvider/ExerciseAllProvider";
import ExerciseFilterSearchInput from "./components/ExerciseFilterSearchInput/ExerciseFilterSearchInput";
import ExerciseFilterTabGroup from "./components/ExerciseFilterTabGroup/ExerciseFilterTabGroup";
import RoutineExerciseAddParamsProvider from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddParamsProvider";
import RoutineExerciseAddCheckBoxGroup from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddCheckGroup/RoutineExerciseAddCheckBoxGroup";
import RoutineExerciseAddButton from "./components/RoutineExerciseAddParamsProvider/RoutineExerciseAddButton/RoutineExerciseAddButton";
import RoutineColorUpdateTabGroup from "./components/RoutineColorUpdateTabGroup/RoutineColorUpdateTabGroup";
import RoutineCreateButton from "./components/RoutineCreateButton/RoutineCreateButton";

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
                    <BottomBox>
                        <RoutineColorUpdateTabGroup />
                    </BottomBox>
                </Footer>
            </RoutineCreateProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineCreatePage;
