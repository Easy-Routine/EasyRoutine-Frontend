import {useLocation} from "react-router-dom";
import NavigateContainer from "components/NavigateContainer";
import RoutineConfigAllGetContainer from "./components/RoutineConfigAllGetContainer/RoutineConfigAllGetContainer";

const RoutineConfigListPage = () => {
    const location = useLocation();

    console.log("location: " + location);

    return (
        <>
            <RoutineConfigAllGetContainer />
            <NavigateContainer path={location.pathname} />
        </>
    );
};

export default RoutineConfigListPage;
