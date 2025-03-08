import {useLocation} from "react-router-dom";
import RoutineConfigAllGetContainer from "./components/RoutineConfigAllGetContainer/RoutineConfigAllGetContainer";
import RoutineConfigCreateButton from "./components/RoutineConfigCreateButton/RoutineConfigCreateButton";
import NavigateBottomBox from "components/NavigateBottomBox";

const RoutineConfigListPage = () => {
    const location = useLocation();

    return (
        <>
            <RoutineConfigAllGetContainer />
            <RoutineConfigCreateButton />
            <NavigateBottomBox path={location.pathname} />
        </>
    );
};

export default RoutineConfigListPage;
