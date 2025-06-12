import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Flex from "headful/Flex/Flex";
import BottomBox from "headful/BottomBox/BottomBox";
import RoutineCreateProvider from "./components/RoutineCreateProvider";
import RoutineExerciseAccordion from "./components/RoutineExerciseAccordion";
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
import ExerciseAllGetProvider from "./components/ExerciseAllGetProvider";
import RoutineExerciseAddProvider from "./components/RoutineExerciseAddProvider";
import ExerciseAddBottomSheet from "./components/ExerciseAddBottomSheet";
import CircleButton from "headful/CircleButton/CircleButton";
import RoutineExerciseAddModalButton from "./components/RoutineExerciseAddModalButton";
import RoutineExerciseEmptyText from "./components/RoutineExerciseEmptyText";
import Label from "headful/Label/Label";
import BasicInput from "headful/BasicInput/BasicInput";
import RoutineNameInput from "./components/RoutineNameInput";
import Text from "headful/Text/Text";

const RoutineCreatePage = () => {
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <RoutineCreateProvider>
                <Main>
                    <Flex direction="column" gap={20} padding={20}>
                        <Label text="루틴 제목" required>
                            <RoutineNameInput />
                        </Label>

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

                        <ExerciseAddBottomSheet>
                            <RoutineExerciseAddModalButton />
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
                        <RoutineExerciseEmptyText />
                    </Flex>
                </Main>
                <Footer>
                    <BottomBox>
                        <Flex direction="column" gap={10} width="100%">
                            <Text
                                color="#000"
                                size={12}
                                weight="500"
                                align="left"
                            >
                                루틴 색상
                            </Text>
                            <Flex justify="center">
                                <RoutineColorUpdateTabGroup />
                            </Flex>
                            <RoutineCreateButton />
                        </Flex>
                    </BottomBox>
                </Footer>
            </RoutineCreateProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineCreatePage;
