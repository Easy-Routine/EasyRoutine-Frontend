import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import TitleHeaderContent from "components/TitleHeaderContent/TitleHeaderContent";
import Flex from "headful/Flex/Flex";
import Label from "headful/Label/Label";
import RoutineNameInput from "./components/RoutineNameInput";
import SummaryBox from "headful/SummaryBox/SummaryBox";
import RoutineHistoryExerciseList from "./components/RoutineHistoryExerciseList";
import RoutineHistoryExerciseAccordion from "./components/RoutineHistoryExerciseAccordion";
import SetUpdateTable from "./components/SetUpdateTable";
import RoutineExerciseDeleteModal from "./components/RoutineExerciseDeleteModal";
import RoutineExerciseDeleteModalButton from "./components/RoutineExerciseDeleteModalButton";
import RoutineExerciseDeleteConfirm from "./components/RoutineExerciseDeleteConfirm";

const RoutineHistoryDetailPage = () => {
    return (
        <PrivatePageTemplate>
            <Header>
                <TitleHeaderContent title="세부 기록" />
            </Header>
            <Main>
                <Flex direction="column" gap={20} padding={20}>
                    <Label text="루틴 제목">
                        <RoutineNameInput />
                    </Label>
                    <SummaryBox>
                        <SummaryBox.Text label="운동시간" value="1시간 36분" />
                        <SummaryBox.Text label="전체볼륨" value="3450KG" />
                    </SummaryBox>

                    <RoutineHistoryExerciseList
                        component={routineExercise => (
                            <RoutineHistoryExerciseAccordion
                                key={routineExercise.id}
                                routineExercise={routineExercise}
                            >
                                <SetUpdateTable
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
                            </RoutineHistoryExerciseAccordion>
                        )}
                    />
                </Flex>
            </Main>
        </PrivatePageTemplate>
    );
};

export default RoutineHistoryDetailPage;
