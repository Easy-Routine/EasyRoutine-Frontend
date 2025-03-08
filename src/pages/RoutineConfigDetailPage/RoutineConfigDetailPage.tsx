import {useParams} from "react-router-dom";
import RoutineConfigGetContainer from "./components/RoutineConfigGetContainer/RoutineConfigGetContainer";
import WorkoutLibraryModalButton from "./components/WorkoutLibraryModalButton/WorkoutLibraryModalButton";

const RoutineConfigDetailPage = () => {
    const {routineConfigId} = useParams();

    return (
        <>
            <RoutineConfigGetContainer
                routineConfigId={routineConfigId as string}
            />
            <WorkoutLibraryModalButton
                routineConfigId={routineConfigId as string}
            />
        </>
    );
};

export default RoutineConfigDetailPage;
