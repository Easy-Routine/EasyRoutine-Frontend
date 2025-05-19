import {useParams} from "react-router-dom";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import useRoutineConfigGetQuery from "hooks/server/useRoutineConfigGetQuery";
import RoutineProgressProvider from "./RoutineConfigGetContainer/RoutinePregressContainer/RoutineProgressProvider";
import Flex from "headful/Flex/Flex";
import WorkoutConfigList from "./components/WorkoutConfigList/WorkoutConfigList";
import WorkoutProgressAccordion from "./RoutineConfigGetContainer/RoutinePregressContainer/WorkoutProgressAccordion/WorkoutProgressAccordion";
import SetProgressUpdateTable from "./RoutineConfigGetContainer/RoutinePregressContainer/WorkoutProgressAccordion/SetProgressUpdateTable/SetProgressUpdateTable";
import SetProgressDeleteButton from "./RoutineConfigGetContainer/RoutinePregressContainer/WorkoutProgressAccordion/SetProgressDeleteButton/SetProgressDeleteButton";
import SetProgressCreateButton from "./RoutineConfigGetContainer/RoutinePregressContainer/WorkoutProgressAccordion/SetProgressCreateButton/SetProgressCreateButton";
import SetProgressCompleteButton from "./RoutineConfigGetContainer/RoutinePregressContainer/WorkoutProgressAccordion/SetProgressCompleteButton/SetProgressCompleteButton";
import WorkoutConfigDeleteButton from "./RoutineConfigGetContainer/RoutinePregressContainer/WorkoutProgressAccordion/WorkoutConfigDeleteButton/WorkoutConfigDeleteButton";

const RoutineProgressPage = () => {
    const {routineConfigId} = useParams();
    const {data} = useRoutineConfigGetQuery(routineConfigId as string);
    const routineConfig = data.routineConfig!;

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <RoutineProgressProvider routineConfig={routineConfig}>
                <Main>
                    <Flex direction="column" gap={20}>
                        <WorkoutConfigList
                            component={workoutConfig => (
                                <WorkoutProgressAccordion
                                    key={workoutConfig._id}
                                    workoutConfig={workoutConfig}
                                >
                                    <SetProgressUpdateTable
                                        workoutConfig={workoutConfig}
                                    />
                                    <SetProgressDeleteButton
                                        workoutConfig={workoutConfig}
                                    />
                                    <SetProgressCreateButton
                                        workoutConfig={workoutConfig}
                                    />
                                    <SetProgressCompleteButton
                                        workoutConfig={workoutConfig}
                                    />
                                    <WorkoutConfigDeleteButton
                                        workoutConfig={workoutConfig}
                                    />
                                </WorkoutProgressAccordion>
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
