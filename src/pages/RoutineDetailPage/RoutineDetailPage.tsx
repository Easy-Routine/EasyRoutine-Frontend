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
import RoutineExerciseDeleteButton from "./components/RoutineExerciseDeleteModalButton";
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
import Label from "headful/Label/Label";
import RoutineNameInput from "./components/RoutineNameInput";
import PageMoveModal from "./components/PageMoveModal";
import PageMoveModalOpenTitleHeaderContent from "./components/PageMoveModalOpenTitleHeaderContent";
import PageMoveConfirm from "./components/PageMoveConfirm";
import Text from "headful/Text/Text";
import RoutineUpdateModal from "./components/RoutineUpdateModal";
import RoutineUpdateModalButton from "./components/RoutineUpdateModalButton";
import RoutineUpdateConfirm from "./components/RoutineUpdateConfirm";
import RoutineExerciseAddModalButton from "./components/RoutineExerciseAddModalButton";
import RoutineExerciseDeleteModal from "./components/RoutineExerciseDeleteModal";
import RoutineExerciseDeleteConfirm from "./components/RoutineExerciseDeleteConfirm";
import RoutineExerciseDeleteModalButton from "./components/RoutineExerciseDeleteModalButton";
import useRoutineAllGetQuery from "hooks/server/useRoutineAllGetQuery";
import {Routine} from "types/model";

const RoutineDetailPage = () => {
    const {routineId} = useParams();
    const {data} = useRoutineAllGetQuery();

    const currentRoutine = data.routines.find(
        routine => routine.id === parseInt(routineId as string),
    ) as Routine;

    return (
        <PrivatePageTemplate>
            <Header>
                <PageMoveModal>
                    <PageMoveModalOpenTitleHeaderContent />
                    <PageMoveConfirm />
                </PageMoveModal>
            </Header>
            <RoutineUpdateProvider defaultValue={currentRoutine}>
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
                                    <RoutineExerciseDeleteModal>
                                        <RoutineExerciseDeleteModalButton
                                            routineExercise={routineExercise}
                                        />
                                        <RoutineExerciseDeleteConfirm
                                            routineExercise={routineExercise}
                                        />
                                    </RoutineExerciseDeleteModal>
                                </RoutineExerciseAccordion>
                            )}
                        />
                    </Flex>

                    <ExerciseAddBottomSheet>
                        <RoutineExerciseAddModalButton />
                        <ExerciseAllGetProvider>
                            <Flex
                                direction="column"
                                gap={20}
                                height="100%"
                                padding={20}
                            >
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

                            <RoutineUpdateModal>
                                <RoutineUpdateModalButton />
                                <RoutineUpdateConfirm />
                            </RoutineUpdateModal>
                        </Flex>
                    </BottomBox>
                </Footer>
            </RoutineUpdateProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineDetailPage;
