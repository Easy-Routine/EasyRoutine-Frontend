import BasicInput from "headful/BasicInput/BasicInput";
import useRoutineHistoryGetQuery from "hooks/server/useRoutineHistoryGetQuery";
import {useParams} from "react-router-dom";

const RoutineNameInput = () => {
    const {routineHistoryId} = useParams();
    const {
        data: {routineHistory},
    } = useRoutineHistoryGetQuery({
        routineHistoryId: parseInt(routineHistoryId as string),
    });
    const {name} = routineHistory!;

    return <BasicInput value={name} disabled />;
};

export default RoutineNameInput;
