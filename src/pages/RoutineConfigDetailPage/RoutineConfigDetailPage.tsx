import {useParams} from "react-router-dom";
import RoutineConfigGetContainer from "./components/RoutineConfigGetContainer/RoutineConfigGetContainer";
import WorkoutLibraryModalButton from "./components/WorkoutLibraryModalButton/WorkoutLibraryModalButton";
import RoutineConfigColorUpdateBottomBox from "./components/RoutineConfigColorUpdateBottomBox/RoutineConfigColorUpdateBottomBox";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";

const RoutineConfigDetailPage = () => {
    const {routineConfigId} = useParams();

    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <RoutineConfigGetContainer
                    routineConfigId={routineConfigId as string}
                />
                <WorkoutLibraryModalButton
                    routineConfigId={routineConfigId as string}
                />
            </Main>
            <Footer>
                <RoutineConfigColorUpdateBottomBox
                    routineConfigId={routineConfigId as string}
                />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineConfigDetailPage;
