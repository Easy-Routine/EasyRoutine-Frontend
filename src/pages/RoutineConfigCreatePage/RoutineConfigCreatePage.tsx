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
import useRoutineConfigGetQuery from "hooks/server/useRoutineConfigGetQuery";
import RoutineConfigCreateProvider from "./components/RoutineConfigCreateProvider/RoutineConfigCreateProvider";
import WorkoutConfigList from "./components/WorkoutConfigList/WorkoutConfigList";
import WorkoutConfigAccordion from "./components/WorkoutConfigAccordion/WorkoutConfigAccordion";
import SetConfigUpdateTable from "./components/WorkoutConfigAccordion/SetConfigUpdateTable/SetConfigUpdateTable";
import SetConfigDeleteButton from "./components/WorkoutConfigAccordion/SetConfigDeleteButton/SetConfigDeleteButton";
import SetConfigCreateButton from "./components/WorkoutConfigAccordion/SetConfigCreateButton/SetConfigCreateButton";
import WorkoutConfigDeleteButton from "./components/WorkoutConfigAccordion/WorkoutConfigDeleteButton/WorkoutConfigDeleteButton";
import WorkoutLibraryModal from "./components/WorkoutLibraryModal/WorkoutLibraryModal";
import WorkoutLibraryAllProvider from "./components/WorkoutLibraryAllProvider/WorkoutLibraryAllProvider";
import WorkoutLibraryFilterSearchInput from "./components/WorkoutLibraryFilterSearchInput/WorkoutLibraryFilterSearchInput";
import WorkoutLibraryFilterTabGroup from "./components/WorkoutLibraryFilterTabGroup/WorkoutLibraryFilterTabGroup";
import WorkoutConfigAddParamsProvider from "./components/WorkoutConfigAddParamsProvider/WorkoutConfigAddParamsProvider";
import WorkoutConfigAddCheckBoxGroup from "./components/WorkoutConfigAddParamsProvider/WorkoutConfigAddCheckGroup/WorkoutConfigAddCheckBoxGroup";
import WorkoutConfigAddButton from "./components/WorkoutConfigAddParamsProvider/WorkoutConfigAddButton/WorkoutConfigAddButton";
import RoutineConfigColorUpdateTabGroup from "./components/RoutineConfigColorUpdateTabGroup/RoutineConfigColorUpdateTabGroup";
import RoutineConfigCreateButton from "./components/RoutineConfigCreateButton/RoutineConfigCreateButton";

const RoutineConfigCreatePage = () => {
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <RoutineConfigCreateProvider>
                <Main>
                    <Flex direction="column" gap={20}>
                        <WorkoutConfigList
                            component={workoutConfig => (
                                <WorkoutConfigAccordion
                                    key={workoutConfig._id}
                                    workoutConfig={workoutConfig}
                                >
                                    <SetConfigUpdateTable
                                        workoutConfig={workoutConfig}
                                    />
                                    <SetConfigDeleteButton
                                        workoutConfig={workoutConfig}
                                    />
                                    <SetConfigCreateButton
                                        workoutConfig={workoutConfig}
                                    />
                                    <WorkoutConfigDeleteButton
                                        workoutConfig={workoutConfig}
                                    />
                                </WorkoutConfigAccordion>
                            )}
                        />
                        <RoutineConfigCreateButton />
                    </Flex>

                    <WorkoutLibraryModal
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
                            <WorkoutLibraryAllProvider>
                                <Flex direction="column" gap={20}>
                                    <WorkoutLibraryFilterSearchInput />
                                    <WorkoutLibraryFilterTabGroup />
                                    <Flex
                                        direction="column"
                                        height={400}
                                        gap={16}
                                    >
                                        <WorkoutConfigAddParamsProvider>
                                            <WorkoutConfigAddCheckBoxGroup />
                                            <WorkoutConfigAddButton />
                                        </WorkoutConfigAddParamsProvider>
                                    </Flex>
                                </Flex>
                            </WorkoutLibraryAllProvider>
                        }
                    />
                </Main>
                <Footer>
                    <BottomBox>
                        <RoutineConfigColorUpdateTabGroup />
                    </BottomBox>
                </Footer>
            </RoutineConfigCreateProvider>
        </PrivatePageTemplate>
    );
};

export default RoutineConfigCreatePage;
